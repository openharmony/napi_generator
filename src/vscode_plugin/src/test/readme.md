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
   | common    | tool              | getCurrentTimeString_test_1<br />replaceall_test_1<br />replaceall_test_2<br />replaceall_test_3<br />replaceall_test_4<br />getTab_test_1<br />getTab_test_2<br />getTab_test_3<br />getTab_test_4<br />removeComments_test_1<br />removeComments_test_2<br />removeComments_test_3<br />removeComments_test_4<br />generateRandomInteger_test_1<br />generateRandomInteger_test_2<br />generateRandomInteger_test_3<br />generateRandomInteger_test_4<br />removeTab_test_1<br />removeTab_test_2<br />removeTab_test_3<br />removeTab_test_4 | pass   | hrt    |
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
   |           | gendts            | transTskey2Ckey_test_1<br />transTskey2Ckey_test_2<br />transTskey2Ckey_test_3<br />transTskey2Ckey_test_4<br />getDtsEnum_test_1<br />getDtsEnum_test_2<br />getDtsEnum_test_3<br />getDtsEnum_test_4<br />getDtsUnions_test_1<br />getDtsUnions_test_2<br />getDtsUnions_test_3<br />getDtsUnions_test_4<br />getDtsStructs_test_1<br />getDtsStructs_test_2<br />getDtsStructs_test_3<br />getDtsStructs_test_4<br />getDtsClasses_test_1<br />getDtsClasses_test_2<br />getDtsClasses_test_3<br />getDtsClasses_test_4<br />getDtsFunction_test_1<br />getDtsFunction_test_2<br />getDtsFunction_test_3<br />getDtsFunction_test_4<br />genDtsFile_test_1<br />genDtsFile_test_2<br />genDtsFile_test_3<br />genDtsFile_test_4 | pass   |        |
   |           | gendtscpp         |                                                              |        |        |
   |           | genhdf            |                                                              |        |        |
   |           | gensa             |                                                              |        |        |
   |           | gentest           |                                                              |        |        |
   | parse     | parsec            |                                                              |        |        |
   |           | parsets           |                                                              |        |        |

   

5. test report

![image-20250212173323390](https://foruda.gitee.com/images/1739778471697649430/a5c2beea_14338299.png)
![image-20250212173323390](https://foruda.gitee.com/images/1739778492612756735/ab635941_14338299.png)