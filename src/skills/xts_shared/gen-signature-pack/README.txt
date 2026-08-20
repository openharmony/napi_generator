XTS 工程签名一键生成（生成 signature/openharmony_sx.p7b）

用法：
1. 把本目录全部文件拷到 XTS 工程根（有 AppScope/ 的那一层）
2. Windows: 双击或运行  gen-signature.bat
   Linux:   bash gen-signature.sh
3. 需要 java 在 PATH；改过 AppScope/app.json5 的 bundleName 后请重新执行

不要把本包脚本/jar 提交进用例仓；只提交生成后的 signature/openharmony_sx.p7b。
