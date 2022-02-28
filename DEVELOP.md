

## 可执行文件开发说明
1.安装typescript：在napi_generator目录下和napi_generator/src目录下分别都执行命令npm i typescript

2.安装stdio：在napi_generator目录下执行命令npm i stdio

3.安装pkg : 在napi_generator目录下执行命令sudo npm i -g pkg

4.打包三个版本 : 执行命令pkg .

执行以上步骤后，即可在gen目录下生成Windows、linux、mac系统下的可执行程序:napi_generator-win.exe、napi_generator-linux、napi_generator-macos。

## 插件开发说明
### Windows

1. 在napi_generator/src这个目录下执行命令npm i typescript。

   ```
   D:\napi_tool_myself\napi_generator\src>npm i typescript                                                                   npm WARN gnapi@0.0.1 No repository field.                                                                                  npm WARN gnapi@0.0.1 No license field.                                                                                      npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):                                    npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})                                                                                                                                                                                                                + typescript@4.5.5                                                                                                          updated 1 package and audited 373 packages in 2.729s                                                                                                                                                                                                  64 packages are looking for funding                                                                                         run `npm fund` for details                                                                                                                                                                                                                          found 1 moderate severity vulnerability                                                                                     run `npm audit fix` to fix them, or `npm audit` for details                                                                                                                                                                                       D:\napi_tool_myself\napi_generator\src>        
   ```

2. 在napi_generator/src这个目录下执行命令npm i vsce。

   ```
   D:\napi_tool_myself\napi_generator\src>npm i vsce                                                                                                                                                                                                    > keytar@7.9.0 install D:\napi_tool_myself\napi_generator\src\node_modules\keytar                                          > prebuild-install || npm run build                                                                                                                                                                                                                  npm WARN gnapi@0.0.1 No repository field.                                                                                  npm WARN gnapi@0.0.1 No license field.                                                                                      npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):                                    npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})                                                                                                                                                                                                                + vsce@2.6.7                                                                                                                added 103 packages from 191 contributors and audited 373 packages in 21.128s                                                                                                                                                                          64 packages are looking for funding                                                                                         run `npm fund` for details                                                                                                                                                                                                                          found 1 moderate severity vulnerability                                                                                     run `npm audit fix` to fix them, or `npm audit` for details                                                                                                                                                                                        D:\napi_tool_myself\napi_generator\src>  
   ```
   
3. 在napi_generator/src这个目录下执行命令npx vsce package，每个选项都选择y，然后回车，最终会在当前目录下打包生成一个插件gnapi-0.0.1.vsix。
   ```
   D:\napi_tool_myself\napi_generator\src>npx vsce package                                                                                                                                                                                       WARNING  A 'repository' field is missing from the 'package.json' manifest file.                                            Do you want to continue? [y/N] y                                                                                            WARNING  Using '*' activation is usually a bad idea as it impacts performance.                                              More info: https://code.visualstudio.com/api/references/activation-events#Start-up                                          Do you want to continue? [y/N] y                                                                                            WARNING  LICENSE.md, LICENSE.txt or LICENSE not found                                                                      Do you want to continue? [y/N] y                                                                                        This extension consists of 2189 files, out of which 1184 are JavaScript files. For performance reasons, you should bundle your extension: https://aka.ms/vscode-bundle-extension . You should also exclude unnecessary files by adding them to your .vscodeignore: https://aka.ms/vscode-vscodeignore                                                                          DONE  Packaged: D:\napi_tool_myself\napi_generator\src\gnapi-0.0.1.vsix (2189 files, 13.79MB)                                                                                                                                                        D:\napi_tool_myself\napi_generator\src> 
   ```
### Linux

1. 在napi_generator/src这个目录下执行命令npm i typescript。

   ```
   joey@joey-virtual-machine:~/code/napi_tool_myself/napi_generator/src$ npm i typescript
   npm WARN gnapi@0.0.1 No repository field.
   npm WARN gnapi@0.0.1 No license field.
   npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules/fsevents):
   npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
   
   + typescript@4.5.5
   added 267 packages from 238 contributors in 33.185s
   
   39 packages are looking for funding
     run `npm fund` for details
     
   joey@joey-virtual-machine:~/code/napi_tool_myself/napi_generator/src$
   ```

2. 在napi_generator/src这个目录下执行命令npm i vsce。

   ```
   joey@joey-virtual-machine:~/code/napi_tool_myself/napi_generator/src$ npm i vsce
   
   > keytar@7.9.0 install /home/joey/code/napi_tool_myself/napi_generator/src/node_modules/keytar
   > prebuild-install || npm run build
   
   npm WARN gnapi@0.0.1 No repository field.
   npm WARN gnapi@0.0.1 No license field.
   npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules/fsevents):
   npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
   
   + vsce@2.6.7
   added 103 packages from 191 contributors in 39.489s
   
   64 packages are looking for funding
     run `npm fund` for details
   
   joey@joey-virtual-machine:~/code/napi_tool_myself/napi_generator/src$ 
   ```

3. 在napi_generator/src这个目录下执行命令npx vsce package，每个选项都选择y，然后回车，最终会在当前目录下打包生成一个插件gnapi-0.0.1.vsix。

   ```
   joey@joey-virtual-machine:~/code/napi_tool_myself/napi_generator/src$ npx vsce package
    WARNING  A 'repository' field is missing from the 'package.json' manifest file.
   Do you want to continue? [y/N] y
    WARNING  Using '*' activation is usually a bad idea as it impacts performance.
   More info: https://code.visualstudio.com/api/references/activation-events#Start-up
   Do you want to continue? [y/N] y
    WARNING  LICENSE.md, LICENSE.txt or LICENSE not found
   Do you want to continue? [y/N] y
   This extension consists of 2189 files, out of which 1184 are JavaScript files. For performance reasons, you should bundle your extension: https://aka.ms/vscode-bundle-extension . You should also exclude unnecessary files by adding them to your .vscodeignore: https://aka.ms/vscode-vscodeignore
    DONE  Packaged: /home/joey/code/napi_tool_myself/napi_generator/src/gnapi-0.0.1.vsix (2189 files, 13.61MB)
   joey@joey-virtual-machine:~/code/napi_tool_myself/napi_generator/src$ 
   
   ```

   