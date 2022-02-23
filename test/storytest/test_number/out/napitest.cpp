#include "napitest.h"

namespace napitest {
bool fun1(NUMBER_TYPE_2 &v, NUMBER_TYPE_3 &out) {
    return true;
}

bool fun2(std::vector<NUMBER_TYPE_4> &v, NUMBER_TYPE_5 &out) {
    return true;
}

bool fun3(TestClass1 &v, NUMBER_TYPE_6 &out) {
    return true;
}

bool fun4(std::string &v, NUMBER_TYPE_7 &out) {
    return true;
}

bool fun5(NUMBER_TYPE_8 &v, std::string &out) {
    return true;
}
}
