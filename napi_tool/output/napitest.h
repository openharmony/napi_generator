#ifndef IMPL_NAPITEST_H
#define IMPL_NAPITEST_H

#include <cstring>
#include <string>
#include <memory>
#include <vector>
#include <math.h>

using NUMBER_TYPE_1 = uint32_t;
using NUMBER_TYPE_2 = uint32_t;
using NUMBER_TYPE_3 = uint32_t;
using NUMBER_TYPE_4 = uint32_t;
using NUMBER_TYPE_5 = uint32_t;
using NUMBER_TYPE_6 = uint32_t;
using NUMBER_TYPE_7 = uint32_t;
using NUMBER_TYPE_8 = uint32_t;



namespace napitest {

class Human {
public:
    std::string name;
    NUMBER_TYPE_1 age;
};
class TestClass1 {
public:
    Human ahuman;
    NUMBER_TYPE_2 num1;
    std::string str1;
    std::vector<NUMBER_TYPE_3> nums;
    std::vector<std::string> strs;
    std::vector<Human> mans;
bool if_direct(std::string &v1, std::string &out);
bool if_callback(std::string &v1, std::string &out);
bool if_async(std::string &v1, std::string &out);
};
bool fun2(std::string &v2, std::vector<NUMBER_TYPE_4> &numcc, Human &mancc, std::vector<Human> &out);
bool fun3(std::string &v2, std::string &out);
bool fun4(std::string &v2, std::string &out);
namespace Space3 {

class TestClass2 {
public:
    NUMBER_TYPE_5 haha;
};
bool fun3(std::string &v3, std::string &out);
namespace Space4 {

class TestClass3 {
public:
    NUMBER_TYPE_6 hoho;
bool add(std::vector<NUMBER_TYPE_7> &v1, NUMBER_TYPE_8 &out);
};
bool fun3(std::string &v3, std::string &out);
}
}
}

#endif // IMPL_NAPITEST_H
