/*
* Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
* Licensed under the Apache License, Version 2.0 (the "License"); 
* you may not use this file except in compliance with the License. 
* You may obtain a copy of the License at 
*
* http://www.apache.org/licenses/LICENSE-2.0 
*
* Unless required by applicable law or agreed to in writing, software 
* distributed under the License is distributed on an "AS IS" BASIS, 
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
* See the License for the specific language governing permissions and 
* limitations under the License. 
*/
#!/usr/bin/env python3
# coding=utf-8

import os
import sys

def do_test():
    if not os.path.isfile("@ohos.test.d.ts"):
        return
    if not os.path.exists("out"):
        os.mkdir("out")
    ret=os.popen("node ../../../src/gen/cmd_gen.js -f @ohos.test.d.ts -o ./out")
    print(ret.read())

    os.chdir("out")
    ret=os.popen("npx node-gyp configure build")
    os.chdir("..")
    
    if "COPY Release" not in ret.read():
        print("error compile failed")
        return
    else:
        print("compile ok")

    os.system("npx mocha test.js")


if __name__ == "__main__":
    work_path = os.path.split(sys.argv[0])[0]
    os.chdir(work_path)

    if len(sys.argv)>=2:
        for fn in sys.argv[1:]:
            if os.path.isdir(fn):
                os.chdir(fn)
                do_test()
                os.chdir("..")
            else:
                print("error",fn,"is not exist")
    else:
        for fn in os.listdir("."):
            if os.path.isdir(fn):
                os.chdir(fn)
                do_test()
                os.chdir("..")
