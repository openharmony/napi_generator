#ifndef EXAM_H
#define EXAM_H

#include <mutex>
#include <thread>
#include <unordered_map>


namespace OHOS {
class Exam {
public:
    std::string getServName();
    std::string getServTime();
    int32_t doSum(int32_t num1, int32_t num2);
    double addCount(double newNum);	
};


}  // namespace OHOS
#endif  // EXAM_H
