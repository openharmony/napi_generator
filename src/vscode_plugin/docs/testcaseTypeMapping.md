# 类型与测试用例对应文档

## dts2cpp

### 变量/返回值
| 类型                                                         | 状态               | 测试用例路径 |
| ------------------------------------------------------------ | ------------------ | ------------ |
| string, number, boolean, void, interface, type，class，Map<string,string>, Map<string,number>, Map<string,boolean> ,Array\<number>,Array\<string>, Array\<boolean>,number[],string[],boolean, Set\<number>, Set\<string>,Set\<number>,tuple:如[number,string,boolean], union:如string \| number, enum, any | 已支持，待补充用例 | -            |

### 函数类型
| 类型            | 状态               | 测试用例路径 |
| --------------- | ------------------ | ------------ |
| static          | 已支持，待补充用例 | -            |
| $               | 已支持，待补充用例 | -            |
| on/off          | 已支持，待补充用例 | -            |
| callback        | 暂不支持           | -            |
| promise         | 暂不支持           | -            |
| arrow func      | 暂不支持           | -            |
| threadsafe_func | 暂不支持           | -            |

### namespace转换
| 类型      | 状态                   | 测试用例路径                                                 |
| --------- | ---------------------- | ------------------------------------------------------------ |
| class     | 已支持                 | parse: `src/test/suite/parse/parsetsclass.test.ts`<br>gen: 待补充用例 |
| function  | 已支持                 | parse: `src/test/suite/parse/parsetsfunc.test.ts`<br>gen: 待补充用例 |
| interface | 已支持                 | parse: `src/test/suite/parse/parsetsstruct.test.ts`<br>gen: 待补充用例 |
| enum      | 已支持                 | parse: `src/test/suite/parse/parsetsenum.test.ts`<br>gen: 待补充用例 |
| union     | 已支持                 | parse: `src/test/suite/parse/parsetsunion.test.ts`<br>gen: 待补充用例 |
| type      | parse支持，gen暂不支持 | -                                                            |

### 其它
| 功能             | 状态     | 测试用例路径 |
| ---------------- | -------- | ------------ |
| import自定义文件 | 暂不支持 | -            |

---

## h2dts

### 变量/返回值
| 类型                                                         | 状态   | 测试用例路径                                |
| ------------------------------------------------------------ | ------ | ------------------------------------------- |
| 基本类型/STL容器/迭代器/map系列/set系列/tuple/pair/智能指针等:<br />基本类型：int、size_t、double、float、short、long、uint8_t、uint16_t、uint32_t、uint64_t、int8_t、int16_t、int32_t、int64_t、bool、char、wchar_t、char8_t、char16_t、char32_t;<br/>std::string::iterator;<br/>std::vector：std::vector\<int>、std::vector\<size_t>、std::vector\<double>、std::vector\<float>、std::vector\<long>、std::vector\<short>、std::vector\<uint8_t>、std::vector\<uint16_t>、std::vector\<uint32_t>、std::vector\<uint64_t>、std::vector\<int8_t>、std::vector\<int16_t>、std::vector\<int32_t>、std::vector\<int64_t>、std::vector\<bool>、std::vector\<char>、std::vector\<wchar_t>、std::vector\<char8_t>、std::vector\<char16_t>、std::vector\<char32_t>;<br/>std::vector\<T>::iterator：std::vector\<int>::iterator、...、std::vector\<bool>::iterator、std::vector\<char>::iterator、...<br/>std::array: std::array\<int, 10>、...、std::array\<bool, 10>、std::array\<char, 10>、...<br/>std::array\<T,int>::iterator：std::array\<int, 10>::iterator、...、std::array\<bool, 10>::iterator、std::array\<char, 10>::iterator、...<br/>std::deque: std::deque\<int>、...、std::deque\<bool>、std::deque\<char>、...<br/>std::deque\<T>::iterator： std::deque\<int>::iterator、...、std::deque\<bool>::iterator、std::deque\<char>::iterator、...<br/>std::list: std::list\<int>、...、std::list\<bool>、std::list\<char>、...<br/>std::list\<T>::iterator: std::list\<int>::iterator、...、std::list\<bool>::iterator、std::list\<char>::iterator、...<br/>std::forward_list: std::forward_list\<int>、...、std::forward_list\<bool>、std::forward_list\<char>、...<br/>std::forward_list\<T>::iterator: std::forward_list\<int>::iterator、...、std::forward_list\<bool>::iterator、std::forward_list\<char>::iterator、...<br/>std::stack: std::stack\<int>、...、std::stack\<bool>、std::stack\<char>、...<br/>std::stack\<T>::iterator: std::stack\<int>::iterator、...、std::stack\<bool>::iterator、std::stack\<char>::iterator、...<br/>std::queue： std::queue\<int>、...、std::queue\<bool>、std::queue\<char>、...<br/>std::queue\<T>::iterator: std::queue\<int>::iterator、...、std::queue\<bool>::iterator、std::queue\<char>::iterator、...<br/>std::valarray: std::valarray\<int>、...、std::valarray\<bool>、std::valarray\<char>、...<br/>std::valarray\<T>::iterator: std::valarray\<int>::iterator、...、std::valarray\<bool>::iterator、std::valarray\<char>::iterator、...<br/>std::priority_queue: std::priority_queue\<int>、...、std::priority_queue\<bool>、std::priority_queue\<char>、...<br/>std::priority_queue\<T>::iterator: std::priority_queue\<int>::iterator、...、std::priority_queue\<bool>::iterator、std::priority_queue\<char>::iterator、...<br/>std::map:  std::map\<char, bool>、std::map\<char, int>、...<br/>std::map\<T1,T2>::itrator：std::map\<char, int>::iterator、...<br/>std::unordered_map: std::unordered_map\<char, int>、...<br/>std::unordered_map\<T1,T2>::itrator: std::unordered_map\<char, int>::iterator、...<br/>std::multimap: std::multimap\<char, int>、...<br/>std::multimap\<T1,T2>::itrator： std::multimap\<char, int>::iterator、...<br/>std::unordered_multimap:  std::unordered_multimap\<char, int>、...  <br/>std::unordered_multimap\<T1,T2>::itrator:  std::unordered_multimap\<char, int>::iterator <br/>std::set:  std::set\<int>、...<br/>std::set\<T>::iterator: std::set\<int>::iterator、...<br/>std::unordered_set: std::unordered_set\<int>、...<br/>std::unordered_set\<T>::iterator: std::unordered_set\<int>::iterator、...<br/>std::multiset： std::multiset\<int>、...<br/>std::multiset\<T>::iterator: std::multiset\<int>::iterator、...<br/>std::unordered_multiset: std::unordered_multiset\<int>、...<br/>std::unordered_multiset\<T>::iterator: std::unordered_multiset\<int>::iterator、...<br/>std::tuple: std::tuple\<int, char, bool, size_t>、...<br/>std::pair: std::pair\<int, char, bool, size_t>、...<br/>std::complex: std::complex\<int, double>、...<br/>Date: std::time_t、std::clock_t、...<br/>std::function: std::function\<int(int, int)>、...<br/>智能指针：std::unique_ptr\<int>、std::shared_ptr\<int>、std::weak_ptr\<int>、... | 已支持 | `src/test/suite/gen/gendtstranskey.test.ts` |

### 函数类型
| 类型       | 状态               | 测试用例路径                                |
| ---------- | ------------------ | ------------------------------------------- |
| 同步函数   | 已支持             | `src/test/suite/gen/gendtsfunction.test.ts` |
| static函数 | 已支持，待补充用例 | -                                           |
| callback   | 暂不支持           | -                                           |
| promise    | 暂不支持           | -                                           |

### namespace转换
| 类型     | 状态   | 测试用例路径                                |
| -------- | ------ | ------------------------------------------- |
| class    | 已支持 | `src/test/suite/gen/gendtsclasses.test.ts`  |
| struct   | 已支持 | `src/test/suite/gen/gendtsstructs.test.ts`  |
| union    | 已支持 | `src/test/suite/gen/gendtsunion.test.ts`    |
| enum     | 已支持 | `src/test/suite/gen/gendtsenum.test.ts`     |
| function | 已支持 | `src/test/suite/gen/gendtsfunction.test.ts` |

---

## h2dtscpp

### 变量/返回值
| 类型                                                         | 状态               | 测试用例路径 |
| ------------------------------------------------------------ | ------------------ | ------------ |
| 基本类型/STL容器/迭代器/map系列/set系列/tuple/pair/智能指针等:<br />基本类型：int、size_t、double、float、short、long、uint8_t、uint16_t、uint32_t、uint64_t、int8_t、int16_t、int32_t、int64_t、bool、char、wchar_t、char8_t、char16_t、char32_t;<br/>std::string::iterator;<br/>std::vector：std::vector\<int>、std::vector\<size_t>、std::vector\<double>、std::vector\<float>、std::vector\<long>、std::vector\<short>、std::vector\<uint8_t>、std::vector\<uint16_t>、std::vector\<uint32_t>、std::vector\<uint64_t>、std::vector\<int8_t>、std::vector\<int16_t>、std::vector\<int32_t>、std::vector\<int64_t>、std::vector\<bool>、std::vector\<char>、std::vector\<wchar_t>、std::vector\<char8_t>、std::vector\<char16_t>、std::vector\<char32_t>;<br/>std::vector\<T>::iterator：std::vector\<int>::iterator、...、std::vector\<bool>::iterator、std::vector\<char>::iterator、...<br/>std::array: std::array\<int, 10>、...、std::array\<bool, 10>、std::array\<char, 10>、...<br/>std::array\<T,int>::iterator：std::array\<int, 10>::iterator、...、std::array\<bool, 10>::iterator、std::array\<char, 10>::iterator、...<br/>std::deque: std::deque\<int>、...、std::deque\<bool>、std::deque\<char>、...<br/>std::deque\<T>::iterator： std::deque\<int>::iterator、...、std::deque\<bool>::iterator、std::deque\<char>::iterator、...<br/>std::list: std::list\<int>、...、std::list\<bool>、std::list\<char>、...<br/>std::list\<T>::iterator: std::list\<int>::iterator、...、std::list\<bool>::iterator、std::list\<char>::iterator、...<br/>std::forward_list: std::forward_list\<int>、...、std::forward_list\<bool>、std::forward_list\<char>、...<br/>std::forward_list\<T>::iterator: std::forward_list\<int>::iterator、...、std::forward_list\<bool>::iterator、std::forward_list\<char>::iterator、...<br/>std::stack: std::stack\<int>、...、std::stack\<bool>、std::stack\<char>、...<br/>std::stack\<T>::iterator: std::stack\<int>::iterator、...、std::stack\<bool>::iterator、std::stack\<char>::iterator、...<br/>std::queue： std::queue\<int>、...、std::queue\<bool>、std::queue\<char>、...<br/>std::queue\<T>::iterator: std::queue\<int>::iterator、...、std::queue\<bool>::iterator、std::queue\<char>::iterator、...<br/>std::valarray: std::valarray\<int>、...、std::valarray\<bool>、std::valarray\<char>、...<br/>std::valarray\<T>::iterator: std::valarray\<int>::iterator、...、std::valarray\<bool>::iterator、std::valarray\<char>::iterator、...<br/>std::priority_queue: std::priority_queue\<int>、...、std::priority_queue\<bool>、std::priority_queue\<char>、...<br/>std::priority_queue\<T>::iterator: std::priority_queue\<int>::iterator、...、std::priority_queue\<bool>::iterator、std::priority_queue\<char>::iterator、...<br/>std::map:  std::map\<char, bool>、std::map\<char, int>、...<br/>std::map\<T1,T2>::itrator：std::map\<char, int>::iterator、...<br/>std::unordered_map: std::unordered_map\<char, int>、...<br/>std::unordered_map\<T1,T2>::itrator: std::unordered_map\<char, int>::iterator、...<br/>std::multimap: std::multimap\<char, int>、...<br/>std::multimap\<T1,T2>::itrator： std::multimap\<char, int>::iterator、...<br/>std::unordered_multimap:  std::unordered_multimap\<char, int>、...  <br/>std::unordered_multimap\<T1,T2>::itrator:  std::unordered_multimap\<char, int>::iterator <br/>std::set:  std::set\<int>、...<br/>std::set\<T>::iterator: std::set\<int>::iterator、...<br/>std::unordered_set: std::unordered_set\<int>、...<br/>std::unordered_set\<T>::iterator: std::unordered_set\<int>::iterator、...<br/>std::multiset： std::multiset\<int>、...<br/>std::multiset\<T>::iterator: std::multiset\<int>::iterator、...<br/>std::unordered_multiset: std::unordered_multiset\<int>、...<br/>std::unordered_multiset\<T>::iterator: std::unordered_multiset\<int>::iterator、...<br/>std::tuple: std::tuple\<int, char, bool, size_t>、...<br/>std::pair: std::pair\<int, char, bool, size_t>、...<br/>std::complex: std::complex\<int, double>、...<br/>Date: std::time_t、std::clock_t、...<br/>std::function: std::function\<int(int, int)>、...<br/>智能指针：std::unique_ptr\<int>、std::shared_ptr\<int>、std::weak_ptr\<int>、... | 已支持，待补充用例 | -            |

### 函数类型
| 类型     | 状态               | 测试用例路径 |
| -------- | ------------------ | ------------ |
| 同步函数 | 已支持，待补充用例 | -            |
| callback | 暂不支持           | -            |
| promise  | 暂不支持           | -            |

### 类型转换
| 类型   | 状态               | 测试用例路径 |
| ------ | ------------------ | ------------ |
| class  | 已支持，待补充用例 | -            |
| struct | 已支持，待补充用例 | -            |
| enum   | 已支持，待补充用例 | -            |
| union  | 已支持，待补充用例 | -            |