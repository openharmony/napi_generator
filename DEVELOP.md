

## 可执行文件开发说明
1.安装typescript：在napi_generator目录下和napi_generator/src目录下分别都执行命令npm i typescript

2.安装stdio：在napi_generator目录下执行命令npm i stdio

3.安装pkg : 在napi_generator目录下执行命令sudo npm i -g pkg

4.打包三个版本 : 执行命令pkg .

执行以上步骤后，即可在gen目录下生成Windows、linux、mac系统下的可执行程序:napi_generator-win.exe、napi_generator-linux、napi_generator-macos。

## 插件开发说明
### Windows
1. 安装yo : 执行命令npm install -g yo generator-code。
2. 使用yo : 新建目录执行命令yo code，gnapi是使用yo code生成的插件代码框架，其中gnapi/gen目录下是我们开发的自动化生成napi程序的源代码。

   ```
    D:\napi_generator\gnapi\gen 的目录
   
   2022/02/11  15:14    <DIR>          .
   2022/02/11  15:14    <DIR>          ..
   2022/02/11  15:14    <DIR>          analyze
   2022/02/10  18:17             5,738 analyze.js
   2022/02/10  18:17             1,253 cmd_gen.js
   2022/02/11  15:14    <DIR>          extend
   2022/02/11  15:14    <DIR>          generate
   2022/02/10  18:17             4,612 generate.js
   2022/02/10  18:17             1,094 main.js
   2022/02/10  18:17               839 test.js
   2022/02/11  15:14    <DIR>          tools
               5 个文件         13,536 字节
               6 个目录 231,732,703,232 可用字节
   
   ```
3. 在gen_plug_napi/gnapi这个目录中执行命令npm i vsce。

4. 执行命令D:\napi_generator\napi>npx vsce package命令，最终会打包生成一个插件gnapi-0.0.1.vsix。
   ```
   D:\napi_generator\napi>npx vsce package
   WARNING  A 'repository' field is missing from the 'package.json' manifest file.
   Do you want to continue? [y/N] y
   WARNING  Using '*' activation is usually a bad idea as it impacts performance.
   More info: https://code.visualstudio.com/api/references/activation-events#Start-up
   Do you want to continue? [y/N] y
   WARNING  LICENSE.md, LICENSE.txt or LICENSE not found
   Do you want to continue? [y/N] y
   This extension consists of 1937 files, out of which 1177 are JavaScript files. For performance reasons, you should bundle your extension: https://aka.ms/vscode-bundle-extension . You should also exclude unnecessary files by adding them to your .vscodeignore: https://aka.ms/vscode-vscodeignore
   DONE  Packaged: D:\napi_generator\napi\napi-0.0.1.vsix (1937 files, 2.79MB)
   
   D:\napi_generator\napi>dir
   
   D:\napi_generator\napi 的目录
   
   2022/02/11  15:32    <DIR>          .
   2022/02/11  15:32    <DIR>          ..
   2022/02/11  15:05               429 .eslintrc.json
   2022/02/11  15:05                34 .gitignore
   2022/02/11  15:05    <DIR>          .vscode
   2022/02/11  15:05               126 .vscodeignore
   2022/02/11  15:05               231 CHANGELOG.md
   2022/02/11  15:05             1,294 extension.js
   2022/02/11  15:14    <DIR>          gen
   2022/02/11  15:05               185 jsconfig.json
   2022/02/11  15:33         2,925,375 napi-0.0.1.vsix
   2022/02/11  15:27    <DIR>          node_modules
   2022/02/11  15:27           193,904 package-lock.json
   2022/02/11  15:27               853 package.json
   2022/02/11  15:30                 0 README.md
   2022/02/11  15:05    <DIR>          test
   2022/02/11  15:05             2,436 vsc-extension-quickstart.md
              11 个文件      3,124,867 字节
               6 个目录 231,702,446,080 可用字节
   
   ```
### Linux
1. 安装yo : 执行命令npm install -g yo generator-code。

2. 使用yo : 新建目录执行命令yo code，gnapi是使用yo code生成的插件代码框架，其中gnapi/gen目录下是我们开发的自动化生成napi程序的源代码。

   ```
   xudong@xudong:~/gen_plug_napi/gnapi/gen$ ls
   analyze  analyze.js  cmd_gen.js  extend  generate  generate.js  main.js  test.js  tools
   
   ```

3. 在gen_plug_napi/gnapi这个目录中执行命令npm i vsce。

4. 执行命令gen_plug_napi/gnapi$ npx vsce package命令，最终会打包生成一个插件gnapi-0.0.1.vsix。

   ```
   xudong@xudong:~/gen_plug_napi/gnapi$ npx vsce package
   WARNING  A 'repository' field is missing from the 'package.json' manifest file.
   Do you want to continue? [y/N] y
   WARNING  Using '*' activation is usually a bad idea as it impacts performance.
   More info: https://code.visualstudio.com/api/references/activation-events#Start-up
   Do you want to continue? [y/N] y
   WARNING  LICENSE.md, LICENSE.txt or LICENSE not found
   Do you want to continue? [y/N] y
   DONE  Packaged: /home/xudong/gen_plug_napi/gnapi/napi3-0.0.1.vsix (30 files, 37.7KB)
   xudong@xudong:~/gen_plug_napi/gnapi$ ls
   CHANGELOG.md  extension.js  gen  jsconfig.json  napi3-0.0.1.vsix  node_modules  package.json  package-lock.json  README.md  test  vsc-extension-quickstart.md
   xudong@xudong:~/gen_plug_napi/gnapi$ 
   
   ```