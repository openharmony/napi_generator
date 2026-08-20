# develop tree -> master acts -> build -> download -> xdevice HTML report
param(
    [Parameter(Mandatory = $true)]
    [string]$Suite,
    [ValidateSet("patch", "full")]
    [string]$SyncMode = "patch",
    [switch]$SkipSync,
    [switch]$SkipBuild,
    [switch]$SkipDownload,
    [switch]$SkipTest,
    [switch]$FullClean,
    [string[]]$TestClasses = @(),
    [string]$Server = "kh-server",
    [string]$DeviceSn = "150100424a5444345202dd1dcc324600"
)

$ErrorActionPreference = "Stop"
$SkillDir = Split-Path (Split-Path $MyInvocation.MyCommand.Path -Parent) -Parent
$ModulesFile = Join-Path $SkillDir "modules.json"
. "$PSScriptRoot\module-lib.ps1"

$sw = [System.Diagnostics.Stopwatch]::StartNew()
$cfg = Get-ModuleConfig $Suite $ModulesFile
Write-Host "=== [$Suite] develop-cycle $(Get-Date -Format 'HH:mm:ss') ==="

if (-not $SkipSync) {
    Write-Host "[sync develop->master]"
    Sync-DevelopToMaster $Suite $ModulesFile $Server $SyncMode
} else {
    Write-Host "[sync] skip"
}

if (-not $SkipBuild) {
    $mode = if ($FullClean) { 'full clean + build' } else { 'light clean + build' }
    Write-Host "[$mode]"
    Clean-Modules $Server @(@{ suite = $Suite; remoteRel = $cfg.remoteRel }) -FullClean:$FullClean
    Build-Module $Server $Suite
    Write-Host "[stage]"
    Stage-ModuleHaps $Server $Suite
} else {
    Write-Host "[build] skip"
}

if (-not $SkipDownload) {
    Write-Host "[download]"
    Download-ModuleHaps $Server $Suite
} else {
    Write-Host "[download] skip"
}

if (-not $SkipTest) {
    Write-Host "[test]"
    Test-DeviceOnline $DeviceSn
    Invoke-Xdevice @($Suite) $DeviceSn -TestClasses $TestClasses
    $latest = Get-LatestReportDir
    Write-Host "Report: $($latest.FullName)\summary_report.html"
} else {
    Write-Host "[test] skip"
}

Write-Host "=== done $($sw.Elapsed.ToString('mm\:ss')) ==="
