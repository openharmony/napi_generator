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
const { fun1, fun2, fun3 } = require("./out/build/Release/napitest")
const { fun4, fun5, fun6 } = require("./out/build/Release/napitest")
const test = require("./out/build/Release/napitest")
var assert = require("assert");

describe('enum', function () {
    // function fun1(v0: string, v1: GrantStatus): GrantStatus;
    it('test fun1', function () {
        let ret = fun1('aaaa', test.GrantStatus.PERMISSION_DENIED);
        assert.strictEqual(ret, test.GrantStatus.PERMISSION_DEFAULT);
    });

    // function fun2(v0: number, v1: LaunchReason): LaunchReason;
    it('test fun2', function () {
        let ret = fun2(18, test.LaunchReason.START_ABILITY);
        assert.strictEqual(ret, test.LaunchReason.UNKNOWN);
    });

    // function fun3(v0: string, v1: Action): Action;
    it('test fun3', function () {
        let ret = fun3('ggg', test.Action.ACTION_DIAL);
        assert.strictEqual(ret, '');
    });

    // function fun4(v0: number, v1: PlayingState): PlayingState;
    it('test fun4', function () {
        let ret = fun4(18, test.PlayingState.STATE_PLAYING);
        assert.strictEqual(ret, 0);
    });

    function abc(ret) {
        assert.deepStrictEqual(ret, test.LaunchReason.UNKNOWN);
    }

    // function fun5(V0: string, callback: Callback<LaunchReason>): void;
    it('test fun5', function () {
        fun5('aaa', abc);
    });

    function asynFun1(err, ret) {
        assert.deepStrictEqual(err.code, 0)
        assert.deepStrictEqual(ret, '')
    }

    // function fun6(v0: string, callback: AsyncCallback<GrantStatus>): void;
    it('test fun6_callback', function () {
        fun6('hhh', asynFun1);
        fun6('hhh').then(def1);
    });

    function def1(ret) {
        assert.deepStrictEqual(ret, '');
    }

    // function fun6(v0: string): Promise<GrantStatus>;
    it('test fun6_promise', function () {
        let promiseObj = fun6('hhh');
        promiseObj.then(ret => { def1(ret) });
    });
});

