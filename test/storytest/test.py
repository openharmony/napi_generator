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
