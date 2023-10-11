#ifndef EXAM_H
#define EXAM_H

#include <mutex>
#include <thread>
#include <unordered_map>
#include <string>

using std::string;

namespace OHOS {
namespace Example {
class Basic {
    public:
    std::string basicName;
    
    public:
    int getBasicId() {
        return this->basicId;
    }
    void setBasicId(int id) {
        this->basicId = id;
    }

    private:
    int basicId;
};

class Human : public Basic {
public:
    bool getOpFlag() {return this->opFlag;};
    void setOpFlag(bool flag) { this->opFlag = flag;};
    std::string getOpDesc() {return this->opDesc;};
    void setOpDesc(std::string desc) { this->opDesc = desc;};
    int getOpSeqId() {return this->opSeqId;};
    void setOpSeqId(int id) {opSeqId = id;};
public:
    std::string opName;
    int age = 0;
private:
    bool opFlag;
    std::string opDesc;
    int opSeqId;
}

struct Book {
    int getCc() {return this->cc;};
    void setCc(int cc) {this->cc = cc;};
    Basic getBasicObj() {return this->basicObj;};
    void setBasicObj(Basic obj) {this->basicObj = obj;};
public:
    int aa;
    bool bb;
    Basic direcObj;
private:
    int cc;
    Basic basicObj;
}

/**
 * @brief service服务，提供IPC调用接口
 * @ServiceClass
 */
class Exam2 {
public:
    Book getBook(Basic& basic);
    int fun1 (Book v1);
    int fun2 (Basic& basic, Human& human);

};

}  // namespace Example
}  // namespace OHOS
#endif  // EXAM_H
