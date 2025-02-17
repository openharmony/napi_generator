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

   | test-dir  | test-target       | testcase                                                     | result | tester |
   | --------- | ----------------- | ------------------------------------------------------------ | ------ | ------ |
   | common    | re                | search_test_1<br />search_test_2<br/>search_test_3<br/>search_test_4<br/>match_test_1<br/>match_test_2<br/>match_test_3<br/>match_test_4<br/>removeReg_test_1<br/>removeReg_test_2<br/>removeReg_test_3<br/>removeReg_test_4<br/>getReg_test_1<br/>getReg_test_2<br/>getReg_test_3<br/>getReg_test_4<br/>getFileInPath_test_1<br />getFileInPath_test_2<br />getFileInPath_test_3<br />getFileInPath_test_4<br/>getPathInPath_test_1<br/>getPathInPath_test_2<br/>getPathInPath_test_3<br/>getPathInPath_test_4<br/>all_test_1<br/>all_test_2<br/>all_test_3<br/>all_test_4<br/>replaceAll_test_1<br/>replaceAll_test_2<br/>replaceAll_test_3<br/>replaceAll_test_4 | pass   | zmh    |
   | common    | tool              |                                                              |        | hrt    |
   | gen/tools | genclientcppfile  |                                                              |        |        |
   |           | gencommonfile     |                                                              |        |        |
   |           | gencommonfunc     |                                                              |        |        |
   |           | genidlfile        |                                                              |        |        |
   |           | geniservicehfile  |                                                              |        |        |
   |           | genproxycppfile   |                                                              |        |        |
   |           | genproxyhfile     |                                                              |        |        |
   |           | gensacppfile      |                                                              |        |        |
   |           | gensahfile        |                                                              |        |        |
   |           | genservicecppfile |                                                              |        |        |
   |           | genservicehfile   |                                                              |        |        |
   |           | genstubcppfile    |                                                              |        |        |
   |           | genstubhfile      |                                                              |        |        |
   | gen       | gencpp            |                                                              |        |        |
   |           | gendts            |                                                              |        |        |
   |           | gendtscpp         |                                                              |        |        |
   |           | genhdf            |                                                              |        |        |
   |           | gensa             |                                                              |        |        |
   |           | gentest           |                                                              |        |        |
   | parse     | parsec            |                                                              |        |        |
   |           | parsets           |                                                              |        |        |

   

5. test report

![image-20250212173323390](https://foruda.gitee.com/images/1739760250683199378/d8c4ae5e_14338299.png)
![image-20250212173323390](https://foruda.gitee.com/images/1739760363377651547/69518a3d_14338299.png)