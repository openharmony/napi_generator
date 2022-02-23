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
class TestClass1 {
public:
    NUMBER_TYPE_1 num1;
};
bool fun1(NUMBER_TYPE_2 &v, NUMBER_TYPE_3 &out);
bool fun2(std::vector<NUMBER_TYPE_4> &v, NUMBER_TYPE_5 &out);
bool fun3(TestClass1 &v, NUMBER_TYPE_6 &out);
bool fun4(std::string &v, NUMBER_TYPE_7 &out);
bool fun5(NUMBER_TYPE_8 &v, std::string &out);}

#endif // IMPL_NAPITEST_H
