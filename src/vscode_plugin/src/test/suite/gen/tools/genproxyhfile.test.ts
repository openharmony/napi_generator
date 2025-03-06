/*
* Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as genProxyhFile from '../../../../gen/tools/genproxyhfile'
import { ClassObj, EnumObj, FuncObj,ParamObj, GenInfo, ParseObj, StructObj, UnionObj, ServiceRootInfo } from '../../../../gen/datatype';
import * as fs from 'fs';
import { arrayBuffer } from 'stream/consumers';

suite('Gen_ProxyhFile_Suite', () => {
    //1, 测试一般情况
    test('doGenProxyHFile_test_1', () =>{
        let params: ParamObj[] = [
            {
                type: 'int',
                name: 'inum',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let funcs: FuncObj[] = [
            {
                type: 'int',
                name: 'func',
                returns: 'int',
                parameters: params
            }
        ];
        let rootInfo: ServiceRootInfo = {
            serviceName: 'test',
            funcs: funcs,
            serviceId: '',
            versionTag: ''
        };
        let fileContent: string = `#ifndef [marcoName]_PROXY_H
        #define [marcoName]_PROXY_H
        #include "message_parcel.h"
        #include "parcel.h"
        #include "iremote_broker.h"
        #include "iremote_proxy.h"
        #include "i_[lowServiceName]_service.h"
        
        namespace OHOS {
        namespace [serviceName] {
        class [serviceName]Proxy : public IRemoteProxy<I[serviceName]Service> {
        public:
            explicit [serviceName]Proxy(const sptr<IRemoteObject> &impl);
            ~[serviceName]Proxy() = default;
            //[functions]
            [proxyHFunctions]
        private:
            static inline BrokerDelegator<[serviceName]Proxy> delegator_;
        };
        
        class [serviceName]DeathRecipient : public IRemoteObject::DeathRecipient {
        public:
            virtual void OnRemoteDied(const wptr<IRemoteObject> &remote) override;
            [serviceName]DeathRecipient();
            virtual ~[serviceName]DeathRecipient();
        };
        } // namespace [serviceName]
        } // namespace OHOS
        #endif // [marcoName]_PROXY_H
        `;
        let resStr = genProxyhFile.doGenProxyHFile(rootInfo, fileContent);
        assert.strictEqual(resStr, `#ifndef TEST_PROXY_H
        #define TEST_PROXY_H
        #include "message_parcel.h"
        #include "parcel.h"
        #include "iremote_broker.h"
        #include "iremote_proxy.h"
        #include "i_test_service.h"
        
        namespace OHOS {
        namespace test {
        class testProxy : public IRemoteProxy<ItestService> {
        public:
            explicit testProxy(const sptr<IRemoteObject> &impl);
            ~testProxy() = default;
            //[functions]
            int func(int inum) override;
        private:
            static inline BrokerDelegator<testProxy> delegator_;
        };
        
        class testDeathRecipient : public IRemoteObject::DeathRecipient {
        public:
            virtual void OnRemoteDied(const wptr<IRemoteObject> &remote) override;
            testDeathRecipient();
            virtual ~testDeathRecipient();
        };
        } // namespace test
        } // namespace OHOS
        #endif // TEST_PROXY_H
        `);
    })

    //2, 测试边界情况
    test('doGenProxyHFile_test_2', () => {
        //1. FuncObj.parameters属性有两个ParamObj
        let params: ParamObj[] = [
            {
                type: 'float',
                name: 'fnum',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'int',
                name: 'inum',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let funcs: FuncObj[] = [
            {
                type: 'number',
                name: 'func',
                returns: 'int',
                parameters: params
            }
        ];
        let rootInfo: ServiceRootInfo = {
            serviceName: 'test',
            funcs: funcs,
            serviceId: '0',
            versionTag: '0'
        };
        let fileContent: string = `#ifndef [marcoName]_PROXY_H
        #define [marcoName]_PROXY_H
        #include "message_parcel.h"
        #include "parcel.h"
        #include "iremote_broker.h"
        #include "iremote_proxy.h"
        #include "i_[lowServiceName]_service.h"
        
        namespace OHOS {
        namespace [serviceName] {
        class [serviceName]Proxy : public IRemoteProxy<I[serviceName]Service> {
        public:
            explicit [serviceName]Proxy(const sptr<IRemoteObject> &impl);
            ~[serviceName]Proxy() = default;
            //[functions]
            [proxyHFunctions]
        private:
            static inline BrokerDelegator<[serviceName]Proxy> delegator_;
        };
        
        class [serviceName]DeathRecipient : public IRemoteObject::DeathRecipient {
        public:
            virtual void OnRemoteDied(const wptr<IRemoteObject> &remote) override;
            [serviceName]DeathRecipient();
            virtual ~[serviceName]DeathRecipient();
        };
        } // namespace [serviceName]
        } // namespace OHOS
        #endif // [marcoName]_PROXY_H
        `;
        let resStr = genProxyhFile.doGenProxyHFile(rootInfo, fileContent);
        assert.strictEqual(resStr, `#ifndef TEST_PROXY_H
        #define TEST_PROXY_H
        #include "message_parcel.h"
        #include "parcel.h"
        #include "iremote_broker.h"
        #include "iremote_proxy.h"
        #include "i_test_service.h"
        
        namespace OHOS {
        namespace test {
        class testProxy : public IRemoteProxy<ItestService> {
        public:
            explicit testProxy(const sptr<IRemoteObject> &impl);
            ~testProxy() = default;
            //[functions]
            int func(float fnum, int inum) override;
        private:
            static inline BrokerDelegator<testProxy> delegator_;
        };
        
        class testDeathRecipient : public IRemoteObject::DeathRecipient {
        public:
            virtual void OnRemoteDied(const wptr<IRemoteObject> &remote) override;
            testDeathRecipient();
            virtual ~testDeathRecipient();
        };
        } // namespace test
        } // namespace OHOS
        #endif // TEST_PROXY_H
        `);
        //2.FuncObj.parameters属性有多个ParamObj
        params = [
            {
                type: 'int',
                name: 'inum',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'short',
                name: 'snum',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'short int',
                name: 'sinum',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'long',
                name: 'slong',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'long int',
                name: 'silong',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'long long',
                name: 'llong',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'long long int',
                name: 'llinum',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'double',
                name: 'dnum',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'char',
                name: 'cname',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'wchar_t',
                name: 'cwname',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'char16_t',
                name: 'c16name',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'char32_t',
                name: 'c32name',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'bool',
                name: 'bflag',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'float',
                name: 'fnum',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'double',
                name: 'dnum',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'long double',
                name: 'ldnum',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::string',
                name: 'ssname',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::wstring',
                name: 'swsname',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::u16string',
                name: 'su16sname',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::u32string',
                name: 'su32name',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::basic_string',
                name: 'sbsname',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::vector<int>',
                name: 'svlist',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::deque<int>',
                name: 'sdlist',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::list<int>',
                name: 'slist',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::forward_list<int>',
                name: 'sflist',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::array<int>',
                name: 'salist',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::queue<int>',
                name: 'sqlist',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::priority_queue<int>',
                name: 'spqlist',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::pair<double, int>',
                name: 'sppair',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::map<double, int>',
                name: 'smap',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::multimap<double, int>',
                name: 'smmap',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::set<double, int>',
                name: 'sset',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::multiset<double, int>',
                name: 'smset',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::unordered_map<double, int>',
                name: 'sumap',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::unordered_multimap<double, int>',
                name:'summap',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::unordered_set<double, int>',
                name: 'suset',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::unordered_multiset<double, int>',
                name: 'sumset',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::vector<int>::iterator',
                name: 'svlistIter',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::deque<int>::iterator',
                name: 'sdlistIter',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::list<int>::iterator',
                name: 'slistIter',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::forward_list<int>::iterator',
                name: 'sflistIter',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::array<int>::iterator',
                name: 'salistIter',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::stack<int>::iterator',
                name: 'sqstackIter',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::queue<int>::iterator',
                name: 'sqqueIter',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::priority_queue<int>::iterator',
                name: 'spqlistIter',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::pair<double, int>::iterator',
                name: 'sppairIer',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::map<double, int>::iterator',
                name: 'smapIter',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::multimap<double, int>::iterator',
                name: 'smmapIter',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::set<double, int>::iterator',
                name: 'ssetIter',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::multiset<double, int>::iterator',
                name: 'smsetIter',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::unordered_map<double, int>::iterator',
                name: 'sumapIter',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::unordered_multimap<double, int>::iterator',
                name: 'summapIter',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::unordered_set<double, int>::iterator',
                name: 'susetIter',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::unordered_multiset<double, int>::iterator',
                name: 'sumsetIter',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::function<int(int, int)>',
                name: 'func',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::tuple<int, float, double>',
                name: 'myTuple',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::complex<double>',
                name: 'myComplex',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::valarray<int>',
                name: 'myValarray',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::time_t',
                name: 'myTimet',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::clock_t',
                name: 'myClock',
                arraySize: -1,
                arraySizeList: []
            },
            {
                type: 'std::tm',
                name: 'myTm',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        funcs = [
            {
                type: '',
                name: 'func',
                returns: 'std::string',
                parameters: params
            }
        ];
        rootInfo = {
            serviceName: 'test',
            funcs: funcs,
            serviceId: '0',
            versionTag: '0'
        };
        resStr = genProxyhFile.doGenProxyHFile(rootInfo, fileContent);
        assert.strictEqual(resStr, `#ifndef TEST_PROXY_H
        #define TEST_PROXY_H
        #include "message_parcel.h"
        #include "parcel.h"
        #include "iremote_broker.h"
        #include "iremote_proxy.h"
        #include "i_test_service.h"
        
        namespace OHOS {
        namespace test {
        class testProxy : public IRemoteProxy<ItestService> {
        public:
            explicit testProxy(const sptr<IRemoteObject> &impl);
            ~testProxy() = default;
            //[functions]
            std::string func(int inum, short snum, short int sinum, long slong, long int silong, long long llong, \
long long int llinum, double dnum, char cname, wchar_t cwname, char16_t c16name, char32_t c32name, bool bflag, \
float fnum, double dnum, long double ldnum, std::string ssname, std::wstring swsname, std::u16string su16sname, \
std::u32string su32name, std::basic_string sbsname, std::vector<int> svlist, std::deque<int> sdlist, \
std::list<int> slist, std::forward_list<int> sflist, std::array<int> salist, std::queue<int> sqlist, \
std::priority_queue<int> spqlist, std::pair<double, int> sppair, std::map<double, int> smap, \
std::multimap<double, int> smmap, std::set<double, int> sset, std::multiset<double, int> smset, \
std::unordered_map<double, int> sumap, std::unordered_multimap<double, int> summap, \
std::unordered_set<double, int> suset, std::unordered_multiset<double, int> sumset, \
std::vector<int>::iterator svlistIter, std::deque<int>::iterator sdlistIter, \
std::list<int>::iterator slistIter, std::forward_list<int>::iterator sflistIter, \
std::array<int>::iterator salistIter, std::stack<int>::iterator sqstackIter, \
std::queue<int>::iterator sqqueIter, std::priority_queue<int>::iterator spqlistIter, \
std::pair<double, int>::iterator sppairIer, std::map<double, int>::iterator smapIter, \
std::multimap<double, int>::iterator smmapIter, std::set<double, int>::iterator ssetIter, \
std::multiset<double, int>::iterator smsetIter, std::unordered_map<double, int>::iterator sumapIter, \
std::unordered_multimap<double, int>::iterator summapIter, std::unordered_set<double, int>::iterator susetIter, \
std::unordered_multiset<double, int>::iterator sumsetIter, std::function<int(int, int)> func, \
std::tuple<int, float, double> myTuple, std::complex<double> myComplex, std::valarray<int> myValarray, \
std::time_t myTimet, std::clock_t myClock, std::tm myTm) override;
        private:
            static inline BrokerDelegator<testProxy> delegator_;
        };
        
        class testDeathRecipient : public IRemoteObject::DeathRecipient {
        public:
            virtual void OnRemoteDied(const wptr<IRemoteObject> &remote) override;
            testDeathRecipient();
            virtual ~testDeathRecipient();
        };
        } // namespace test
        } // namespace OHOS
        #endif // TEST_PROXY_H
        `);
        //3.ServiceRootInfo.funcs属性有两个FuncObj
        params = [
            {
                type: 'int',
                name: 'inum',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params1: ParamObj[] = [
            {
                type: 'std::string',
                name: 'sname',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        funcs = [
            {
                type: 'int',
                name: 'func',
                returns: 'std::string',
                parameters: params
            },
            {
                type: '',
                name: 'func1',
                returns: 'void',
                parameters: params1
            }
        ];
        rootInfo = {
            serviceName: 'test',
            funcs: funcs,
            serviceId: '0',
            versionTag: '0'
        };
        resStr = genProxyhFile.doGenProxyHFile(rootInfo, fileContent);
        assert.strictEqual(resStr, `#ifndef TEST_PROXY_H
        #define TEST_PROXY_H
        #include "message_parcel.h"
        #include "parcel.h"
        #include "iremote_broker.h"
        #include "iremote_proxy.h"
        #include "i_test_service.h"
        
        namespace OHOS {
        namespace test {
        class testProxy : public IRemoteProxy<ItestService> {
        public:
            explicit testProxy(const sptr<IRemoteObject> &impl);
            ~testProxy() = default;
            //[functions]
            std::string func(int inum) override;
    void func1(std::string sname) override;
        private:
            static inline BrokerDelegator<testProxy> delegator_;
        };
        
        class testDeathRecipient : public IRemoteObject::DeathRecipient {
        public:
            virtual void OnRemoteDied(const wptr<IRemoteObject> &remote) override;
            testDeathRecipient();
            virtual ~testDeathRecipient();
        };
        } // namespace test
        } // namespace OHOS
        #endif // TEST_PROXY_H
        `);
        //4.ServiceRootInfo.funcs属性有多个FuncObj
        let params2: ParamObj[] = [
            {
                type: 'long',
                name: 'slong',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params3: ParamObj[] = [
            {
                type: 'short',
                name: 'snum',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params4: ParamObj[] = [
            {
                type: 'short int',
                name: 'sinum',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params5: ParamObj[] = [
            {
                type: 'long int',
                name: 'silong',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params6: ParamObj[] = [
            {
                type: 'long long',
                name: 'llong',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params7: ParamObj[] = [
            {
                type: 'long long int',
                name: 'llinum',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params8: ParamObj[] = [
            {
                type: 'char',
                name: 'cname',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params9: ParamObj[] = [
            {
                type: 'wchar_t',
                name: 'cwname',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params10: ParamObj[] = [
            {
                type: 'char16_t',
                name: 'c16name',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params11: ParamObj[] = [
            {
                type: 'char32_t',
                name: 'c32name',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params12: ParamObj[] = [
            {
                type: 'bool',
                name: 'bflag',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params13: ParamObj[] = [
            {
                type: 'float',
                name: 'fnum',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params14: ParamObj[] = [
            {
                type: 'double',
                name: 'dnum',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params15: ParamObj[] = [
            {
                type: 'long double',
                name: 'ldnum',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params16: ParamObj[] = [
            {
                type: 'std::wstring',
                name: 'swsname',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params17: ParamObj[] = [
            {
                type: 'std::u16string',
                name: 'su16sname',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params18: ParamObj[] = [
            {
                type: 'std::u32string',
                name: 'su32sname',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params19: ParamObj[] = [
            {
                type: 'std::basic_string',
                name: 'sbsname',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params20: ParamObj[] = [
            {
                type: 'std::vector<int>',
                name: 'svlist',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params21: ParamObj[] = [
            {
                type: 'std::deque<int>',
                name: 'sdlist',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params22: ParamObj[] = [
            {
                type: 'std::list<int>',
                name: 'slist',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params23: ParamObj[] = [
            {
                type: 'std::forward_list<int>',
                name: 'sflist',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params24: ParamObj[] = [
            {
                type: 'std::array<int>',
                name: 'salist',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params25: ParamObj[] = [
            {
                type: 'std::stack<int>',
                name: 'sqstack',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params26: ParamObj[] = [
            {
                type: 'std::queue<int>',
                name: 'sqlist',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params27: ParamObj[] = [
            {
                type: 'std::priority_queue<int>',
                name: 'spqlist',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params28: ParamObj[] = [
            {
                type: 'std::pair<double, int>',
                name: 'sppair',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params29: ParamObj[] = [
            {
                type: 'std::map<double, int>',
                name: 'smap',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params30: ParamObj[] = [
            {
                type: 'std::multimap<double, <int>',
                name: 'smmap',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params31: ParamObj[] = [
            {
                type: 'std::set<double, int>',
                name: 'sset',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params32: ParamObj[] = [
            {
                type: 'std::multiset<double, int>',
                name: 'smset',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params33: ParamObj[] = [
            {
                type: 'std::unordered_map<double, int>',
                name: 'sumap',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params34: ParamObj[] = [
            {
                type: 'std::unordered_multimap<double, int>',
                name: 'summap',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params35: ParamObj[] = [
            {
                type: 'std::unordered_set<double, int>',
                name: 'suset',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params36: ParamObj[] = [
            {
                type: 'std::unordered_multiset<double, int>',
                name: 'sumset',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params37: ParamObj[] = [
            {
                type: 'std::vector<char>',
                name: 'svlistc',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params38: ParamObj[] = [
            {
                type: 'std::deque<char>',
                name: 'sdlistc',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params39: ParamObj[] = [
            {
                type: 'std::list<char>',
                name: 'slistc',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params40: ParamObj[] = [
            {
                type: 'std::forward_list<char>',
                name: 'sflistc',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params41: ParamObj[] = [
            {
                type: 'std::array<char>',
                name: 'aslistc',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params42: ParamObj[] = [
            {
                type: 'std::stack<char>',
                name: 'sqstackc',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params43: ParamObj[] = [
            {
                type: 'std::queue<char>',
                name: 'sqlistc',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params44: ParamObj[] = [
            {
                type: 'std::priority_queue<char>',
                name: 'spqlistc',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params45: ParamObj[] = [
            {
                type: 'std::pair<char, int>',
                name: 'sppairc',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params46: ParamObj[] = [
            {
                type: 'std::map<double, int>',
                name: 'smapc',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params47: ParamObj[] = [
            {
                type: 'std::multimap<char, int>',
                name: 'smmapc',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params48: ParamObj[] = [
            {
                type: 'std::set<char, int>',
                name: 'ssetc',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        let params49: ParamObj[] = [
            {
                type: 'std::multiset<char, int>',
                name: 'smsetc',
                arraySize: -1,
                arraySizeList: []
            }
        ];
        funcs = [
            {
                type: '',
                name: 'func',
                returns: 'int',
                parameters: params
            },
            {
                type: '',
                name: 'func1',
                returns: 'std::string',
                parameters: params1
            },
            {
                type: '',
                name: 'func2',
                returns: 'void',
                parameters: params2
            },
            {
                type: '',
                name: 'func3',
                returns: 'void',
                parameters: params3
            },
            {
                type: '',
                name: 'func4',
                returns: 'void',
                parameters: params4
            },
            {
                type: '',
                name: 'func5',
                returns: 'void',
                parameters: params5
            },
            {
                type: '',
                name: 'func6',
                returns: 'void',
                parameters: params6
            },
            {
                type: '',
                name: 'func7',
                returns: 'void',
                parameters: params7
            },
            {
                type: '',
                name: 'func8',
                returns: 'void',
                parameters: params8
            },
            {
                type: '',
                name: 'func9',
                returns: 'void',
                parameters: params9
            },
            {
                type: '',
                name: 'func10',
                returns: 'void',
                parameters: params10
            },
            {
                type: '',
                name: 'func11',
                returns: 'void',
                parameters: params11
            },
            {
                type: '',
                name: 'func12',
                returns: 'void',
                parameters: params12
            },
            {
                type: '',
                name: 'func13',
                returns: 'void',
                parameters: params13
            },
            {
                type: '',
                name: 'func14',
                returns: 'void',
                parameters: params14
            },
            {
                type: '',
                name: 'func15',
                returns: 'void',
                parameters: params15
            },
            {
                type: '',
                name: 'func16',
                returns: 'void',
                parameters: params16
            },
            {
                type: '',
                name: 'func17',
                returns: 'void',
                parameters: params17
            },
            {
                type: '',
                name: 'func18',
                returns: 'void',
                parameters: params18
            },
            {
                type: '',
                name: 'func19',
                returns: 'void',
                parameters: params19
            },
            {
                type: '',
                name: 'func20',
                returns: 'void',
                parameters: params20
            },
            {
                type: '',
                name: 'func21',
                returns: 'void',
                parameters: params21
            },
            {
                type: '',
                name: 'func22',
                returns: 'void',
                parameters: params22
            },
            {
                type: '',
                name: 'func23',
                returns: 'void',
                parameters: params23
            },
            {
                type: '',
                name: 'func24',
                returns: 'void',
                parameters: params24
            },
            {
                type: '',
                name: 'func25',
                returns: 'void',
                parameters: params25
            },
            {
                type: '',
                name: 'func26',
                returns: 'void',
                parameters: params26
            },
            {
                type: '',
                name: 'func27',
                returns: 'void',
                parameters: params27
            },
            {
                type: '',
                name: 'func28',
                returns: 'void',
                parameters: params28
            },
            {
                type: '',
                name: 'func29',
                returns: 'void',
                parameters: params29
            },
            {
                type: '',
                name: 'func30',
                returns: 'void',
                parameters: params30
            },
            {
                type: '',
                name: 'func31',
                returns: 'void',
                parameters: params31
            },
            {
                type: '',
                name: 'func32',
                returns: 'void',
                parameters: params32
            },
            {
                type: '',
                name: 'func33',
                returns: 'void',
                parameters: params33
            },
            {
                type: '',
                name: 'func34',
                returns: 'void',
                parameters: params34
            },
            {
                type: '',
                name: 'func35',
                returns: 'void',
                parameters: params35
            },
            {
                type: '',
                name: 'func36',
                returns: 'void',
                parameters: params36
            },
            {
                type: '',
                name: 'func37',
                returns: 'void',
                parameters: params37
            },
            {
                type: '',
                name: 'func38',
                returns: 'void',
                parameters: params38
            },
            {
                type: '',
                name: 'func39',
                returns: 'void',
                parameters: params39
            },
            {
                type: '',
                name: 'func40',
                returns: 'void',
                parameters: params40
            },
            {
                type: '',
                name: 'func41',
                returns: 'void',
                parameters: params41
            },
            {
                type: '',
                name: 'func42',
                returns: 'void',
                parameters: params42
            },
            {
                type: '',
                name: 'func43',
                returns: 'void',
                parameters: params43
            },
            {
                type: '',
                name: 'func44',
                returns: 'void',
                parameters: params44
            },
            {
                type: '',
                name: 'func45',
                returns: 'void',
                parameters: params45
            },
            {
                type: '',
                name: 'func46',
                returns: 'void',
                parameters: params46
            },
            {
                type: '',
                name: 'func47',
                returns: 'void',
                parameters: params47
            },
            {
                type: '',
                name: 'func48',
                returns: 'void',
                parameters: params48
            },
            {
                type: '',
                name: 'func49',
                returns: 'void',
                parameters: params49
            }
        ];
        rootInfo = {
            serviceName: 'test',
            funcs: funcs,
            serviceId: '0',
            versionTag: '0'
        };
        resStr = genProxyhFile.doGenProxyHFile(rootInfo, fileContent);
        assert.strictEqual(resStr,`#ifndef TEST_PROXY_H
        #define TEST_PROXY_H
        #include "message_parcel.h"
        #include "parcel.h"
        #include "iremote_broker.h"
        #include "iremote_proxy.h"
        #include "i_test_service.h"
        
        namespace OHOS {
        namespace test {
        class testProxy : public IRemoteProxy<ItestService> {
        public:
            explicit testProxy(const sptr<IRemoteObject> &impl);
            ~testProxy() = default;
            //[functions]
            int func(int inum) override;
    std::string func1(std::string sname) override;
    void func2(long slong) override;
    void func3(short snum) override;
    void func4(short int sinum) override;
    void func5(long int silong) override;
    void func6(long long llong) override;
    void func7(long long int llinum) override;
    void func8(char cname) override;
    void func9(wchar_t cwname) override;
    void func10(char16_t c16name) override;
    void func11(char32_t c32name) override;
    void func12(bool bflag) override;
    void func13(float fnum) override;
    void func14(double dnum) override;
    void func15(long double ldnum) override;
    void func16(std::wstring swsname) override;
    void func17(std::u16string su16sname) override;
    void func18(std::u32string su32sname) override;
    void func19(std::basic_string sbsname) override;
    void func20(std::vector<int> svlist) override;
    void func21(std::deque<int> sdlist) override;
    void func22(std::list<int> slist) override;
    void func23(std::forward_list<int> sflist) override;
    void func24(std::array<int> salist) override;
    void func25(std::stack<int> sqstack) override;
    void func26(std::queue<int> sqlist) override;
    void func27(std::priority_queue<int> spqlist) override;
    void func28(std::pair<double, int> sppair) override;
    void func29(std::map<double, int> smap) override;
    void func30(std::multimap<double, <int> smmap) override;
    void func31(std::set<double, int> sset) override;
    void func32(std::multiset<double, int> smset) override;
    void func33(std::unordered_map<double, int> sumap) override;
    void func34(std::unordered_multimap<double, int> summap) override;
    void func35(std::unordered_set<double, int> suset) override;
    void func36(std::unordered_multiset<double, int> sumset) override;
    void func37(std::vector<char> svlistc) override;
    void func38(std::deque<char> sdlistc) override;
    void func39(std::list<char> slistc) override;
    void func40(std::forward_list<char> sflistc) override;
    void func41(std::array<char> aslistc) override;
    void func42(std::stack<char> sqstackc) override;
    void func43(std::queue<char> sqlistc) override;
    void func44(std::priority_queue<char> spqlistc) override;
    void func45(std::pair<char, int> sppairc) override;
    void func46(std::map<double, int> smapc) override;
    void func47(std::multimap<char, int> smmapc) override;
    void func48(std::set<char, int> ssetc) override;
    void func49(std::multiset<char, int> smsetc) override;
        private:
            static inline BrokerDelegator<testProxy> delegator_;
        };
        
        class testDeathRecipient : public IRemoteObject::DeathRecipient {
        public:
            virtual void OnRemoteDied(const wptr<IRemoteObject> &remote) override;
            testDeathRecipient();
            virtual ~testDeathRecipient();
        };
        } // namespace test
        } // namespace OHOS
        #endif // TEST_PROXY_H
        `);
    })


})