### Run test

1. Modify launch.json

   ```json
   //add test config
   {
     "name": "Run Extension Tests",
     "type": "extensionHost",
     "request": "launch",
     "runtimeExecutable": "${execPath}",
     "args": [
   	  "--extensionDevelopmentPath=${workspaceFolder}",
         "--extensionTestsPath=${workspaceFolder}/out/test/suite/index"
     ],
     "outFiles": ["${workspaceFolder}/out/test/**/*.js"],
     "preLaunchTask": "npm: watch"
   }
   
   ```

   

2. start the test by using “F5”

   

3. get result in output of "debug console(调试控制台)"

   

4. add testcase: following test-files in "test\suit"

   | test-dir  | test-target       | testcase | result | tester |
   | --------- | ----------------- | -------- | ------ | ------ |
   | common    | re                |          |        | zmh    |
   | common    | tool              |          |        | hrt    |
   | gen/tools | genclientcppfile  |          |        |        |
   |           | gencommonfile     |          |        |        |
   |           | gencommonfunc     |          |        |        |
   |           | genidlfile        |          |        |        |
   |           | geniservicehfile  |          |        |        |
   |           | genproxycppfile   |          |        |        |
   |           | genproxyhfile     |          |        |        |
   |           | gensacppfile      |          |        |        |
   |           | gensahfile        |          |        |        |
   |           | genservicecppfile |          |        |        |
   |           | genservicehfile   |          |        |        |
   |           | genstubcppfile    |          |        |        |
   |           | genstubhfile      |          |        |        |
   | gen       | gencpp            |          |        |        |
   |           | gendts            |          |        |        |
   |           | gendtscpp         |          |        |        |
   |           | genhdf            |          |        |        |
   |           | gensa             |          |        |        |
   |           | gentest           |          |        |        |
   | parse     | parsec            |          |        |        |
   |           | parsets           |          |        |        |

   

5. test report
