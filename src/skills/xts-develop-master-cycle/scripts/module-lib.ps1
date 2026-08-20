# XTS develop -> master -> build -> test helpers
$script:DevelopRoot = "/root/aiSkill/develop/xts_acts_0622"
$script:RemoteActs = "/root/master/test/xts/acts"
$script:RemoteTc = "/root/master/out/rk3568/suites/acts/acts/testcases"
$script:RemoteHaps = "/root/master/out/rk3568/suites/haps"
$script:LocalTc = "D:\acts\testcases"
$script:LocalActs = "D:\acts"

function Get-ModuleConfig([string]$Suite, [string]$ModulesFile) {
    $all = Get-Content $ModulesFile -Raw | ConvertFrom-Json
    if (-not $all.$Suite) { throw "Unknown suite: $Suite" }
    $cfg = $all.$Suite
    if ($all._defaults.developRoot) {
        $script:DevelopRoot = $all._defaults.developRoot
    }
    if ($all._defaults.masterActs) {
        $script:RemoteActs = $all._defaults.masterActs
    }
    return $cfg
}

function Invoke-Ssh([string]$Server, [string]$Cmd) {
    $out = ssh -o ConnectTimeout=15 -o BatchMode=yes -o ServerAliveInterval=10 $Server $Cmd 2>&1
    if ($LASTEXITCODE -ne 0) { throw "SSH failed ($LASTEXITCODE): $Cmd`n$out" }
    return ($out | Out-String).Trim()
}

function Sync-DevelopToMaster(
    [string]$Suite,
    [string]$ModulesFile,
    [string]$Server = "kh-server",
    [ValidateSet("patch", "full")]
    [string]$Mode = "patch"
) {
    $cfg = Get-ModuleConfig $Suite $ModulesFile
    $rel = $cfg.remoteRel
    $scriptPath = Join-Path $PSScriptRoot "sync-develop-to-master.sh"
    $remoteScript = "/tmp/sync-develop-to-master.sh"
    scp -o ConnectTimeout=15 -o BatchMode=yes $scriptPath "${Server}:${remoteScript}" | Out-Null
    $cmd = "chmod +x $remoteScript && DEVELOP_ROOT='$DevelopRoot' MASTER_ACTS='$RemoteActs' " +
        "bash $remoteScript '$rel' '$Mode'"
    Write-Host "  [sync] develop -> master ($Mode): $rel"
    $out = Invoke-Ssh $Server $cmd
    Write-Host $out
}

function Get-CleanCmd([string]$RemoteRel, [string]$Suite, [switch]$FullClean) {
    $objBase = "/root/master/out/rk3568/obj/test/xts/acts/$RemoteRel"
    $remoteSrc = "$script:RemoteActs/$RemoteRel"
    $main = "${Suite}Main"
    # P0: always purge Test+Main HAP/obj/hvigor (no stamp-only Main modules.abc)
    $parts = @(
        "find '$objBase' -name '*compile_app.stamp' -delete 2>/dev/null",
        "rm -f '$objBase/${Suite}.stamp' '$objBase/${main}.stamp'",
        "rm -f '$script:RemoteHaps/${Suite}.hap' '$script:RemoteHaps/${main}.hap'",
        "rm -f '$script:RemoteTc/${Suite}.hap' '$script:RemoteTc/${main}.hap'",
        "rm -rf '$objBase/module_${Suite}' '$objBase/module_${main}' '$objBase/${Suite}' '$objBase/${main}'",
        "rm -rf '$remoteSrc/entry/build' '$remoteSrc/entry/.hvigor' '$remoteSrc/build' '$remoteSrc/.hvigor'",
        "touch '$remoteSrc/entry/src/main/module.json5'",
        "touch '$remoteSrc/entry/src/ohosTest/module.json5' 2>/dev/null || true"
    )
    if ($FullClean) {
        $parts += @("find '$objBase' -name '*.stamp' -delete 2>/dev/null")
    }
    return ($parts -join '; ')
}

function Clean-Modules([string]$Server, [hashtable[]]$Items, [switch]$FullClean) {
    $cmds = @()
    foreach ($item in $Items) {
        $cmds += (Get-CleanCmd $item.remoteRel $item.suite -FullClean:$FullClean)
    }
    $label = if ($FullClean) { 'full' } else { 'light' }
    Write-Host "  [clean/$label] $($Items.Count) module(s)..."
    Invoke-Ssh $Server ($cmds -join '; echo CLEAN_OK; ') | Out-Null
}

function Build-Module([string]$Server, [string]$Suite, [string]$RemoteRel = '') {
    $log = "/tmp/${Suite}_build.log"
    $stype = if ($cfg.type -eq 'static') { 'bin,hap_dynamic,hap_static' } else { 'bin,hap_dynamic' }
    $cmd = "cd $script:RemoteActs && ./build.sh suite=acts system_size=standard " +
        "product_name=rk3568 target_subsystem=arkui xts_suitetype=$stype suite=$Suite > $log 2>&1; " +
        'echo BUILD_EXIT:$?'
    $sw = [System.Diagnostics.Stopwatch]::StartNew()
    $out = Invoke-Ssh $Server $cmd
    if ($out -notmatch 'BUILD_EXIT:0') { throw "Build failed for ${Suite}: $out" }
    $compileLines = Invoke-Ssh $Server "grep -ci 'compile_app\|hvigor' $log || true"
    Write-Host "  [$Suite] build OK $($sw.Elapsed.ToString('mm\:ss')), hvigor lines=$compileLines"
    if ($compileLines -lt 100) {
        Write-Host "  WARN: hvigor lines=$compileLines — will rely on Linux freshness gate if using run-develop-cycle.sh"
    }
    # Prefer server-side bash freshness gate when RemoteRel known
    if ($RemoteRel) {
        $fresh = "source /root/aiSkill/.claude/skills/xts-develop-master-cycle/scripts/module-lib.sh && " +
            "verify_suite_haps_fresh '$Suite' '$RemoteRel'"
        $fresOut = Invoke-Ssh $Server $fresh
        Write-Host $fresOut
        if ($LASTEXITCODE -ne 0 -or "$fresOut" -match 'FAIL') {
            Write-Host "  [freshness] stale → auto full-clean rebuild"
            Clean-Modules $Server @(@{ remoteRel = $RemoteRel; suite = $Suite }) -FullClean
            $out2 = Invoke-Ssh $Server $cmd
            if ($out2 -notmatch 'BUILD_EXIT:0') { throw "Rebuild failed for ${Suite}: $out2" }
            $fresOut2 = Invoke-Ssh $Server $fresh
            Write-Host $fresOut2
            if ("$fresOut2" -match 'FAIL') { throw "freshness gate failed for $Suite after full-clean" }
        }
    }
}

function Stage-ModuleHaps([string]$Server, [string]$Suite) {
    $main = "${Suite}Main"
    $cmd = "test -f '$script:RemoteHaps/${Suite}.hap' || (echo MISSING_HAP && exit 1); " +
        "cp -f '$script:RemoteHaps/${Suite}.hap' '$script:RemoteTc/'; " +
        "stat -c '%Y %s %n' '$script:RemoteTc/${Suite}.hap' '$script:RemoteTc/${main}.hap'"
    Invoke-Ssh $Server $cmd | ForEach-Object { Write-Host "    $_" }
}

function Download-ModuleHaps([string]$Server, [string]$Suite) {
    scp -o ConnectTimeout=15 -o BatchMode=yes "${Server}:$script:RemoteTc/${Suite}*" $script:LocalTc | Out-Null
    Get-ChildItem "$script:LocalTc\${Suite}*.hap" | ForEach-Object {
        Write-Host "    local: $($_.Name) $($_.LastWriteTime)"
    }
}

function Format-XdeviceTestArgs([string[]]$TestClasses, [string[]]$TestCases) {
    $filters = @()
    if ($TestClasses) { $filters += ($TestClasses | Where-Object { $_.Trim() }) }
    if ($TestCases) { $filters += ($TestCases | Where-Object { $_.Trim() }) }
    if ($filters.Count -eq 0) { return @() }
    return @("class:$($filters -join ',')")
}

function Invoke-Xdevice(
    [string[]]$Suites,
    [string]$DeviceSn,
    [string[]]$TestClasses = @(),
    [string[]]$TestCases = @()
) {
    $ta = Format-XdeviceTestArgs $TestClasses $TestCases
    $cmd = @(
        'python', '-m', 'xdevice', 'run',
        '-l', ($Suites -join ';'),
        '-tcpath', $script:LocalTc,
        '-respath', $script:LocalTc,
        '-sn', $DeviceSn
    )
    if ($ta.Count -gt 0) { $cmd += '-ta'; $cmd += $ta }
    Push-Location $script:LocalActs
    try {
        & $cmd[0] $cmd[1..($cmd.Length - 1)]
        if ($LASTEXITCODE -ne 0) { throw "xdevice exit $LASTEXITCODE" }
    } finally {
        Pop-Location
    }
}

function Get-LatestReportDir() {
    return Get-ChildItem "D:\acts\reports" -Directory |
        Where-Object { $_.Name -match '^\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}$' } |
        Sort-Object Name -Descending |
        Select-Object -First 1
}

function Test-DeviceOnline([string]$DeviceSn, [int]$MaxWaitSec = 90) {
    $deadline = (Get-Date).AddSeconds($MaxWaitSec)
    while ((Get-Date) -lt $deadline) {
        $list = hdc list targets 2>&1 | Out-String
        if ($list -match [regex]::Escape($DeviceSn)) { return }
        Start-Sleep -Seconds 3
    }
    throw "Device offline: $DeviceSn"
}
