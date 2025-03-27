# Antlr4使用教程

## 一、Antlr4工具介绍

Antlr4（Another Tool for Language Recognition）是一款基于Java开发的开源的语法分析器生成工具，能够根据语法规则文件生成对应的语法分析器，广泛应用于DSL构建，语言词法语法解析等领域。

## 二、安装和配置（windows10）

ANTLR依赖Java环境，所以必须要安装JDK 1.6+，并设置好环境变量。 

1. 下载安装

可通过以下方式安装，两者选其一就好：

官网下载：https://www.antlr.org/download.html
命令行安装：curl -O https://www.antlr.org/download/antlr-4.13.2-complete.jar

2. 测试下ANTLR工具是否工作正常：

   ```
   java -jar antlr-4.13.2-complete.jar
   ```

   ​    将工具存放在特定文件夹中方便日后寻找，例如C:\Users\zxj\TOOLS\ANTLR4，在该文件夹下新建bat文件夹，新增两文件antlr4.bat和grun.bat，内容分别如下：

   ```
   java org.antlr.v4.Tool %* //antlr4.bat
   ```

   ```
   java org.antlr.v4.gui.TestRig %* //grun.bat
   ```

3. 配置环境变量
   
   1）修改CLASSPATH
   打开环境变量，选择“系统变量”中的“CLASSPATH”，双击打开，如果系统变量中没有“CLASSPATH”，需新建“CLASSPATH”，在变量值中做如下添加:
   ![image-1](.\images\image-1.png)
   ![image-2](.\images\image-2.png)
   ps:需要有一个 点（.）。
   
   2)修改Path
   找到系统变量中的Path进行修改，双击打开，点击“新建”，添加C:\Users\zxj\TOOLS\ANTLR4\bat\到末尾，点击“确定”(C:\Users\zxj\TOOLS\ANTLR4为前面提到的antlr-4.13.2-complete.jar存放的文件夹)。

路径添加完毕！重启电脑让路径生效。

3. 测试下是否安装成功：在cmd中输入antlr4,回车，观察输出是否如下图。
   ![image-3](.\images\image-3.png)
   在cmd中输入grun，回车，观察输出是否如下图，如果正常的话，那到这里就说明我们的安装和配置已经成功！
   ![image-4](.\images\image-4.png)

## 三、语法文件编写

语法文件整体结构如下：

```
/** Optional javadoc style comment */

grammar Name;

options {...}

import ... ;

 

tokens {...}

channels {...} // lexer only

@actionName {...}

 

rule1 // parser and lexer rules, possibly intermingled

...

ruleN
```

- **grammar Name**是词法跟语法都在同一个文件声明的写法，称之为**combined**。若要分开，可以使用lexer grammar Name和parser grammar Name。需要注意的是，Name要和文件名保持一致。

- **options**可以是如下四个选项：

  superClass：指定生成xxxLexer.java、xxxParser.java的父类。
  language：生成目标语言，如java。
  tokenVocab：导入外部词法文件（用于拆分大型语法）。
  TokenLabelType：默认的是antlr的Token类型，这里可以使用自定义的token类，如MyToken。需要配合TokenFactory使用

- **import**导入其他语法文件的规则，lexer grammer只能导入lexer grammer，parser grammer只能导入parser grammer，混合语法可以同时导入以上两者。

- **tokens**定义虚拟Token，用于在语法树上标记节点，不用于匹配具体字符。

- **actionName** 可以是如下内容

  @header：在生成的代码文件头部插入内容（如包声明、导入语句）。
  @member：在生成的分析器中添加成员变量或添加方法。

  如果要指定在lexer或者parser中，可以使用 @lexer::member、@parser::member。

- **channels**将某些词法规则分配到特定通道，如隐藏注释但不丢弃

- **rule** 词法规则和语法规则

  *lexer示例*

  ```
  lexer grammar HelloLexer;
  HI : 'H' 'i'
  ID : [a-z]+;
  WS : [\t\n\r\s]+ -> skip;
  ```

  *parser示例*

  ```
  parser grammar HelloParser;
  options {
  	language=Java;
  	tokenVocab=HelloLexer;
  }
  
  @header {
  	package com.laudandjolynn.antlr;
  	import java.util.Set;
  	import java.util.HashSet;
  }
  @member {
  	private int count;
  	public int getCount() {
  		return count;
  	}
  }
  start : HI ID;
  ```

- 词法规则以大写字母开头，定义了如何将输入文本分解成词法单元（tokens)。词法规则使用正则表达式来定义匹配模式。

- 语法规则以小写字母开头，规则通过组合词法单元和其他语法规则来定义语法结构，例如

```
expr : expr op=('*'|'/') expr  # MulDiv
     | expr op=('+'|'-') expr  # AddSub
     | INT                     # int
     | '(' expr ')'            # parens
     ;
```

1. 常见的语言模式

   1）序列模式

   它是一个任意长的，可能为空的序列，其中的元素可以是词法符号或者子规则。比如一个协议语言POP，由关键字、整数和换行组成，如下：

   ```
   retr : 'RETR' INT '\n'
   ```

   任意长度序列可以用 `+` 字符。`(INT)+` 或者 `INT+`。

   2）选择模式（多个备选分支）

   使用符号 `|` 作为“或者”来表达编程语言中的选择模式。备选分支或者可生成的结果。

   ```
   type : 'float' | 'int' | 'void'
   ```

   3）词法符号依赖

   依赖符号的语法，比如数组的括号。表达对符号的依赖的方法。

   ```
   vector : '[' INT+ ']' ; // [1], [1 2], [1 2 3], ...
   ```

   以方法定义为例，它的语法表示如下：

   ```
   functionDecl
       : type ID '{' formalParameters? '}'
       ;
   formalParameters
       : formalParameter (',' formalParameter)*
       ;
   formalParameter
       : type ID
   ```

   4）嵌套结构

   自己引用自己。如果一条规则定义中的伪代码引用了它自身，就需要一条递归规则（自引用规则）。例如：

   ```
   expr: ID '[' expr ']'  //a[1],a[b[1]],a[(2*b[1])]
       | '(' expr ')'  //(1),(a[1]),(((1))),(2*a[1])
       | INT
       ;
   ```

“|”、“?“等记号在语法文件中比较常见，其功能如下方表格：

| 用法                  | 描述                              |
| --------------------- | --------------------------------- |
| x                     | 匹配词法符号、规则引用或者子规则x |
| x y ... z             | 匹配一列规则元素                  |
| (... \| ... \| ...)   | 一个具有多个备选分支的子规则      |
| x?                    | 匹配x或者忽略它                   |
| x*                    | 匹配x零次或多次                   |
| x+                    | 匹配x一次或多次                   |
| r: ...;               | 定义规则r                         |
| r: ... \| ... \| .... | 定义具有多个备选分支的规则r       |

2. 左递归和优先级：直接或间接调用在选项左边缘的自身的规则，写在前面的语法拥有较高的优先级。ANTLR可以处理直接左递归，不能处理间接左递归。如果遇到从右向左结合的，需要使用assoc手工指定结合性：

```
expr : <assoc=right> expr '^' expr
     | INT
     ;
```

3. 识别词法

- 匹配标识符

  ```
  ID : [a-zA-z]+ ;//匹配一个或多个大小写字母
  ```

  或者

  ```
  ID : ('a'..'z'|'A'..'Z')+ ; 
  ```

  ID规则可能和其他规则冲突，譬如其他关键字enum

- 匹配数字

  i）整数

  ```
  INT : [0-9]+ ;
  ```

  或者

  ```
  INT : '0'..'9'+ ;
  ```

  ii）浮点数

  ```
  FLOAT : DIGIT+ '.' DIGIT*  // 1. 3.14
        |        '.' DIGIT+  // .1 .1415
        ;
  fragment
  DIGIT : [0-9] ; // 单个数字
  ```

  fragment：词法片段，构成词法的元素，不是一个词法规则。在词法规则中可引用一个或多个词法片段。

- 字符串

  ```
  STRING : '"' .*? '"' ;
  ```

  `.` 匹配任意单个字符，`.*` 匹配零个或多个，`?` 标记表示使用非贪婪匹配子规则（nongreedy subrule）。

  ```
  //转义字符
  STRING : '"' (ESC|.)*? '"' ;
  fragment
  ESC : '\\"' | '\\\\' ; // 转义 \" 和 \\
  ```

- 注释和空白字符

  C 中的单行和多行注释：

  ```
  LINE_COMINT : '//' .*? '\r'? '\n' -> skip ; // 消费掉双斜杠后面的一切字符，直到遇到换行符
  ```

  空白字符：

  ```
  WS : [ \t\r\n]+ -> skip ;
  ```

## 四、示例

1. 新建一个文件夹，然后在文件夹中新建一个语法文件Hello.g4，文件内容如下：

   ```
   grammar Hello;               // 定义文法的名字
   
   r  : 'hello' ID ;            // 匹配关键字hello和标志符
   ID : [a-z]+ ;                // 标志符由小写字母组成
   WS : [ \t\r\n]+ -> skip ;    // 跳过空格、制表符、回车符和换行符
   ```

2. 在语法文件所在目录下打开命令行窗口，输入命令

   ```
   antlr4 Hello.g4
   ```

   运行ANTLR命令编译该语法文件生成词法分析器和语法分析器如下：

   ![image-5](.\images\image-5.png)

3. 编译生成文件的java代码

   ```
   javac *.java
   ```

4. 用ANTLR运行库提供的语法调试工具TestRig来对语法文件进行测试，测试命令如下

   ```
   grun GrammerName startRuleName [options]
   ```

   其中GrammerName是指语法文件名称（不含后缀），startRuleName是指语法文件中起始规则的名称，options是指TestRig参数，常用的参数如下：

   | 选项      | 功能说明                   | 示例用法               |
   | --------- | -------------------------- | ---------------------- |
   | `-tokens` | 打印词法符号流             | `grun Hello r -tokens` |
   | `-tree`   | 以LISP格式打印语法树       | `grun Hello r -tree`   |
   | `-gui`    | 以可视化方式显示语法分析树 | `grun Hello r -gui`    |

   在语法文件所在目录的命令行窗口输入  `grun Hello r -tokens`，按回车，然后按Ctrl+Z，再次回车，会得到

   ![image-6](.\images\image-6.png)

   在语法文件所在目录的命令行窗口输入  `grun Hello r -tree`，按回车，然后按Ctrl+Z，再次回车，会得到

   ![image-7](.\images\image-7.png)

   在语法文件所在目录的命令行窗口输入  `grun Hello r -gui`，按回车，然后按Ctrl+Z，再次回车，会得到

   ![image-8](.\images\image-8.png)

   还有一些其他的TestRig参数如下：

   | 选项                     | 功能说明                                                     | 示例用法                                                     |
   | ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | `-ps file.ts`            | 以PostScript格式生成可视化语法分析树并存储在相应文件中       | `run Hello r -ps file.ps`                                    |
   | `-encoding encodingname` | 指定测试输入文件的编码，若当前区域设定无法正确读取输入时使用 | `grun Hello r -encoding UTF-8`                               |
   | `-trace`                 | 打印规则的名字以及进入和离开该规则时的词法符号，用于调试     | `grun Hello r -trace`                                        |
   | `-diagnostics`           | 开启解析过程中的调试信息输出，通常在输入文本有歧义等特殊情况下使用 | `grun Hello r -diagnostics`                                  |
   | `-SLL`                   | 使用更快但受限的解析策略（默认策略为 `LL(*)`）               | `grun Hello r -SLL`                                          |
   | `input-filename(s)`      | 输入测试文本文件名，从控制台输入时忽略此参数                 | `grun Hello r -gui aa.txt`(aa.txt是同级目录下的测试文本文件) |

## 五、进阶版示例

这是一个生成TypeScript解析器来解析CPP14代码的示例。

1. 新建一个文件夹，在文件夹中新建一语法文件CPP14.g4，文件内容如下：

   ```
   grammar CPP14;
   
   options {
       superClass = CPP14ParserBase;
   }
   
   /*Basic concepts*/
   translationUnit
       : declarationseq? EOF
       ;
   
   /*Expressions*/
   primaryExpression
       : literal+
       | This
       | LeftParen expression RightParen
       | idExpression
       | lambdaExpression
       ;
   
   idExpression
       : unqualifiedId
       | qualifiedId
       ;
   
   unqualifiedId
       : Identifier
       | operatorFunctionId
       | conversionFunctionId
       | literalOperatorId
       | Tilde (className | decltypeSpecifier)
       | templateId
       ;
   
   qualifiedId
       : nestedNameSpecifier Template? unqualifiedId
       ;
   
   nestedNameSpecifier
       : (theTypeName | namespaceName | decltypeSpecifier)? Doublecolon
       | nestedNameSpecifier ( Identifier | Template? simpleTemplateId) Doublecolon
       ;
   
   lambdaExpression
       : lambdaIntroducer lambdaDeclarator? compoundStatement
       ;
   
   lambdaIntroducer
       : LeftBracket lambdaCapture? RightBracket
       ;
   
   lambdaCapture
       : captureList
       | captureDefault (Comma captureList)?
       ;
   
   captureDefault
       : And
       | Assign
       ;
   
   captureList
       : capture (Comma capture)* Ellipsis?
       ;
   
   capture
       : simpleCapture
       | initcapture
       ;
   
   simpleCapture
       : And? Identifier
       | This
       ;
   
   initcapture
       : And? Identifier initializer
       ;
   
   lambdaDeclarator
       : LeftParen parameterDeclarationClause? RightParen Mutable? exceptionSpecification? attributeSpecifierSeq? trailingReturnType?
       ;
   
   postfixExpression
       : primaryExpression
       | postfixExpression LeftBracket (expression | bracedInitList) RightBracket
       | postfixExpression LeftParen expressionList? RightParen
       | (simpleTypeSpecifier | typeNameSpecifier) (
           LeftParen expressionList? RightParen
           | bracedInitList
       )
       | postfixExpression (Dot | Arrow) (Template? idExpression | pseudoDestructorName)
       | postfixExpression (PlusPlus | MinusMinus)
       | (Dynamic_cast | Static_cast | Reinterpret_cast | Const_cast) Less theTypeId Greater LeftParen expression RightParen
       | typeIdOfTheTypeId LeftParen (expression | theTypeId) RightParen
       ;
   
   /*
    add a middle layer to eliminate duplicated function declarations
    */
   
   typeIdOfTheTypeId
       : Typeid_
       ;
   
   expressionList
       : initializerList
       ;
   
   pseudoDestructorName
       : nestedNameSpecifier? (theTypeName Doublecolon)? Tilde theTypeName
       | nestedNameSpecifier Template simpleTemplateId Doublecolon Tilde theTypeName
       | Tilde decltypeSpecifier
       ;
   
   unaryExpression
       : postfixExpression
       | (PlusPlus | MinusMinus | unaryOperator | Sizeof) unaryExpression
       | Sizeof (LeftParen theTypeId RightParen | Ellipsis LeftParen Identifier RightParen)
       | Alignof LeftParen theTypeId RightParen
       | noExceptExpression
       | newExpression_
       | deleteExpression
       ;
   
   unaryOperator
       : Or
       | Star
       | And
       | Plus
       | Tilde
       | Minus
       | Not
       ;
   
   newExpression_
       : Doublecolon? New newPlacement? (newTypeId | LeftParen theTypeId RightParen) newInitializer_?
       ;
   
   newPlacement
       : LeftParen expressionList RightParen
       ;
   
   newTypeId
       : typeSpecifierSeq newDeclarator_?
       ;
   
   newDeclarator_
       : pointerOperator newDeclarator_?
       | noPointerNewDeclarator
       ;
   
   noPointerNewDeclarator
       : LeftBracket expression RightBracket attributeSpecifierSeq?
       | noPointerNewDeclarator LeftBracket constantExpression RightBracket attributeSpecifierSeq?
       ;
   
   newInitializer_
       : LeftParen expressionList? RightParen
       | bracedInitList
       ;
   
   deleteExpression
       : Doublecolon? Delete (LeftBracket RightBracket)? castExpression
       ;
   
   noExceptExpression
       : Noexcept LeftParen expression RightParen
       ;
   
   castExpression
       : unaryExpression
       | LeftParen theTypeId RightParen castExpression
       ;
   
   pointerMemberExpression
       : castExpression ((DotStar | ArrowStar) castExpression)*
       ;
   
   multiplicativeExpression
       : pointerMemberExpression ((Star | Div | Mod) pointerMemberExpression)*
       ;
   
   additiveExpression
       : multiplicativeExpression ((Plus | Minus) multiplicativeExpression)*
       ;
   
   shiftExpression
       : additiveExpression (shiftOperator additiveExpression)*
       ;
   
   shiftOperator
       : Greater Greater
       | Less Less
       ;
   
   relationalExpression
       : shiftExpression ((Less | Greater | LessEqual | GreaterEqual) shiftExpression)*
       ;
   
   equalityExpression
       : relationalExpression ((Equal | NotEqual) relationalExpression)*
       ;
   
   andExpression
       : equalityExpression (And equalityExpression)*
       ;
   
   exclusiveOrExpression
       : andExpression (Caret andExpression)*
       ;
   
   inclusiveOrExpression
       : exclusiveOrExpression (Or exclusiveOrExpression)*
       ;
   
   logicalAndExpression
       : inclusiveOrExpression (AndAnd inclusiveOrExpression)*
       ;
   
   logicalOrExpression
       : logicalAndExpression (OrOr logicalAndExpression)*
       ;
   
   conditionalExpression
       : logicalOrExpression (Question expression Colon assignmentExpression)?
       ;
   
   assignmentExpression
       : conditionalExpression
       | logicalOrExpression assignmentOperator initializerClause
       | throwExpression
       ;
   
   assignmentOperator
       : Assign
       | StarAssign
       | DivAssign
       | ModAssign
       | PlusAssign
       | MinusAssign
       | RightShiftAssign
       | LeftShiftAssign
       | AndAssign
       | XorAssign
       | OrAssign
       ;
   
   expression
       : assignmentExpression (Comma assignmentExpression)*
       ;
   
   constantExpression
       : conditionalExpression
       ;
   
   /*Statements*/
   
   statement
       : labeledStatement
       | declarationStatement
       | attributeSpecifierSeq? (
           expressionStatement
           | compoundStatement
           | selectionStatement
           | iterationStatement
           | jumpStatement
           | tryBlock
       )
       ;
   
   labeledStatement
       : attributeSpecifierSeq? (Identifier | Case constantExpression | Default) Colon statement
       ;
   
   expressionStatement
       : expression? Semi
       ;
   
   compoundStatement
       : LeftBrace statementSeq? RightBrace
       ;
   
   statementSeq
       : statement+
       ;
   
   selectionStatement
       : If LeftParen condition RightParen statement (Else statement)?
       | Switch LeftParen condition RightParen statement
       ;
   
   condition
       : expression
       | attributeSpecifierSeq? declSpecifierSeq declarator (
           Assign initializerClause
           | bracedInitList
       )
       ;
   
   iterationStatement
       : While LeftParen condition RightParen statement
       | Do statement While LeftParen expression RightParen Semi
       | For LeftParen (
           forInitStatement condition? Semi expression?
           | forRangeDeclaration Colon forRangeInitializer
       ) RightParen statement
       ;
   
   forInitStatement
       : expressionStatement
       | simpleDeclaration
       ;
   
   forRangeDeclaration
       : attributeSpecifierSeq? declSpecifierSeq declarator
       ;
   
   forRangeInitializer
       : expression
       | bracedInitList
       ;
   
   jumpStatement
       : (Break | Continue | Return (expression | bracedInitList)? | Goto Identifier) Semi
       ;
   
   declarationStatement
       : blockDeclaration
       ;
   
   /*Declarations*/
   
   declarationseq
       : declaration+
       ;
   
   declaration
       : blockDeclaration
       | functionDefinition
       | templateDeclaration
       | explicitInstantiation
       | explicitSpecialization
       | linkageSpecification
       | namespaceDefinition
       | emptyDeclaration_
       | attributeDeclaration
       ;
   
   blockDeclaration
       : simpleDeclaration
       | asmDefinition
       | namespaceAliasDefinition
       | usingDeclaration
       | usingDirective
       | staticAssertDeclaration
       | aliasDeclaration
       | opaqueEnumDeclaration
       ;
   
   aliasDeclaration
       : Using Identifier attributeSpecifierSeq? Assign theTypeId Semi
       ;
   
   simpleDeclaration
       : declSpecifierSeq? initDeclaratorList? Semi
       | attributeSpecifierSeq declSpecifierSeq? initDeclaratorList Semi
       ;
   
   staticAssertDeclaration
       : Static_assert LeftParen constantExpression Comma StringLiteral RightParen Semi
       ;
   
   emptyDeclaration_
       : Semi
       ;
   
   attributeDeclaration
       : attributeSpecifierSeq Semi
       ;
   
   declSpecifier
       : storageClassSpecifier
       | typeSpecifier
       | functionSpecifier
       | Friend
       | Typedef
       | Constexpr
       ;
   
   declSpecifierSeq
       : declSpecifier+? attributeSpecifierSeq?
       ;
   
   storageClassSpecifier
       : Register
       | Static
       | Thread_local
       | Extern
       | Mutable
       ;
   
   functionSpecifier
       : Inline
       | Virtual
       | Explicit
       ;
   
   typedefName
       : Identifier
       ;
   
   typeSpecifier
       : trailingTypeSpecifier
       | classSpecifier
       | enumSpecifier
       ;
   
   trailingTypeSpecifier
       : simpleTypeSpecifier
       | elaboratedTypeSpecifier
       | typeNameSpecifier
       | cvQualifier
       ;
   
   typeSpecifierSeq
       : typeSpecifier+ attributeSpecifierSeq?
       ;
   
   trailingTypeSpecifierSeq
       : trailingTypeSpecifier+ attributeSpecifierSeq?
       ;
   
   simpleTypeLengthModifier
       : Short
       | Long
       ;
   
   simpleTypeSignednessModifier
       : Unsigned
       | Signed
       ;
   
   simpleTypeSpecifier
       : nestedNameSpecifier? theTypeName
       | nestedNameSpecifier Template simpleTemplateId
       | Char
       | Char16
       | Char32
       | Wchar
       | Bool
       | Short
       | Int
       | Long
       | Float
       | Signed
       | Unsigned
       | Float
       | Double
       | Void
       | Auto
       | decltypeSpecifier
       ;
   
   theTypeName
       : className
       | enumName
       | typedefName
       | simpleTemplateId
       ;
   
   decltypeSpecifier
       : Decltype LeftParen (expression | Auto) RightParen
       ;
   
   elaboratedTypeSpecifier
       : classKey (
           attributeSpecifierSeq? nestedNameSpecifier? Identifier
           | simpleTemplateId
           | nestedNameSpecifier Template? simpleTemplateId
       )
       | Enum nestedNameSpecifier? Identifier
       ;
   
   enumName
       : Identifier
       ;
   
   enumSpecifier
       : enumHead LeftBrace (enumeratorList Comma?)? RightBrace
       ;
   
   enumHead
       : enumkey attributeSpecifierSeq? (nestedNameSpecifier? Identifier)? enumbase?
       ;
   
   opaqueEnumDeclaration
       : enumkey attributeSpecifierSeq? Identifier enumbase? Semi
       ;
   
   enumkey
       : Enum (Class | Struct)?
       ;
   
   enumbase
       : Colon typeSpecifierSeq
       ;
   
   enumeratorList
       : enumeratorDefinition (Comma enumeratorDefinition)*
       ;
   
   enumeratorDefinition
       : enumerator (Assign constantExpression)?
       ;
   
   enumerator
       : Identifier
       ;
   
   namespaceName
       : originalNamespaceName
       | namespaceAlias
       ;
   
   originalNamespaceName
       : Identifier
       ;
   
   namespaceDefinition
       : Inline? Namespace (Identifier | originalNamespaceName)? LeftBrace namespaceBody = declarationseq? RightBrace
       ;
   
   namespaceAlias
       : Identifier
       ;
   
   namespaceAliasDefinition
       : Namespace Identifier Assign qualifiednamespacespecifier Semi
       ;
   
   qualifiednamespacespecifier
       : nestedNameSpecifier? namespaceName
       ;
   
   usingDeclaration
       : Using (Typename_? nestedNameSpecifier | Doublecolon) unqualifiedId Semi
       ;
   
   usingDirective
       : attributeSpecifierSeq? Using Namespace nestedNameSpecifier? namespaceName Semi
       ;
   
   asmDefinition
       : Asm LeftParen StringLiteral RightParen Semi
       ;
   
   linkageSpecification
       : Extern StringLiteral (LeftBrace declarationseq? RightBrace | declaration)
       ;
   
   attributeSpecifierSeq
       : attributeSpecifier+
       ;
   
   attributeSpecifier
       : LeftBracket LeftBracket attributeList? RightBracket RightBracket
       | alignmentspecifier
       ;
   
   alignmentspecifier
       : Alignas LeftParen (theTypeId | constantExpression) Ellipsis? RightParen
       ;
   
   attributeList
       : attribute (Comma attribute)* Ellipsis?
       ;
   
   attribute
       : (attributeNamespace Doublecolon)? Identifier attributeArgumentClause?
       ;
   
   attributeNamespace
       : Identifier
       ;
   
   attributeArgumentClause
       : LeftParen balancedTokenSeq? RightParen
       ;
   
   balancedTokenSeq
       : balancedtoken+
       ;
   
   balancedtoken
       : LeftParen balancedTokenSeq RightParen
       | LeftBracket balancedTokenSeq RightBracket
       | LeftBrace balancedTokenSeq RightBrace
       | ~(LeftParen | RightParen | LeftBrace | RightBrace | LeftBracket | RightBracket)+
       ;
   
   /*Declarators*/
   
   initDeclaratorList
       : initDeclarator (Comma initDeclarator)*
       ;
   
   initDeclarator
       : declarator initializer?
       ;
   
   declarator
       : pointerDeclarator
       | noPointerDeclarator parametersAndQualifiers trailingReturnType
       ;
   
   pointerDeclarator
       : (pointerOperator Const?)* noPointerDeclarator
       ;
   
   noPointerDeclarator
       : declaratorid attributeSpecifierSeq?
       | noPointerDeclarator (
           parametersAndQualifiers
           | LeftBracket constantExpression? RightBracket attributeSpecifierSeq?
       )
       | LeftParen pointerDeclarator RightParen
       ;
   
   parametersAndQualifiers
       : LeftParen parameterDeclarationClause? RightParen cvqualifierseq? refqualifier? exceptionSpecification? attributeSpecifierSeq?
       ;
   
   trailingReturnType
       : Arrow trailingTypeSpecifierSeq abstractDeclarator?
       ;
   
   pointerOperator
       : (And | AndAnd) attributeSpecifierSeq?
       | nestedNameSpecifier? Star attributeSpecifierSeq? cvqualifierseq?
       ;
   
   cvqualifierseq
       : cvQualifier+
       ;
   
   cvQualifier
       : Const
       | Volatile
       ;
   
   refqualifier
       : And
       | AndAnd
       ;
   
   declaratorid
       : Ellipsis? idExpression
       ;
   
   theTypeId
       : typeSpecifierSeq abstractDeclarator?
       ;
   
   abstractDeclarator
       : pointerAbstractDeclarator
       | noPointerAbstractDeclarator? parametersAndQualifiers trailingReturnType
       | abstractPackDeclarator
       ;
   
   pointerAbstractDeclarator
       : pointerOperator* (noPointerAbstractDeclarator | pointerOperator)
       ;
   
   noPointerAbstractDeclarator
       : (parametersAndQualifiers | LeftParen pointerAbstractDeclarator RightParen) (
           parametersAndQualifiers
           | LeftBracket constantExpression? RightBracket attributeSpecifierSeq?
       )*
       ;
   
   abstractPackDeclarator
       : pointerOperator* noPointerAbstractPackDeclarator
       ;
   
   noPointerAbstractPackDeclarator
       : Ellipsis (
           parametersAndQualifiers
           | LeftBracket constantExpression? RightBracket attributeSpecifierSeq?
       )*
       ;
   
   parameterDeclarationClause
       : parameterDeclarationList (Comma? Ellipsis)?
       ;
   
   parameterDeclarationList
       : parameterDeclaration (Comma parameterDeclaration)*
       ;
   
   parameterDeclaration
       : attributeSpecifierSeq? declSpecifierSeq (declarator | abstractDeclarator?) (
           Assign initializerClause
       )?
       ;
   
   functionDefinition
       : attributeSpecifierSeq? declSpecifierSeq? declarator virtualSpecifierSeq? functionBody
       ;
   
   functionBody
       : constructorInitializer? compoundStatement
       | functionTryBlock
       | Assign (Default | Delete) Semi
       ;
   
   initializer
       : braceOrEqualInitializer
       | LeftParen expressionList RightParen
       ;
   
   braceOrEqualInitializer
       : Assign initializerClause
       | bracedInitList
       ;
   
   initializerClause
       : assignmentExpression
       | bracedInitList
       ;
   
   initializerList
       : initializerClause Ellipsis? (Comma initializerClause Ellipsis?)*
       ;
   
   bracedInitList
       : LeftBrace (initializerList Comma?)? RightBrace
       ;
   
   /*Classes*/
   
   className
       : Identifier
       | simpleTemplateId
       ;
   
   classSpecifier
       : classHead LeftBrace memberSpecification? RightBrace
       ;
   
   classHead
       : classKey attributeSpecifierSeq? (classHeadName classVirtSpecifier?)? baseClause?
       | Union attributeSpecifierSeq? ( classHeadName classVirtSpecifier?)?
       ;
   
   classHeadName
       : nestedNameSpecifier? className
       ;
   
   classVirtSpecifier
       : Final
       ;
   
   classKey
       : Class
       | Struct
       ;
   
   memberSpecification
       : (memberdeclaration | accessSpecifier Colon)+
       ;
   
   memberdeclaration
       : attributeSpecifierSeq? declSpecifierSeq? memberDeclaratorList? Semi
       | functionDefinition
       | usingDeclaration
       | staticAssertDeclaration
       | templateDeclaration
       | aliasDeclaration
       | emptyDeclaration_
       ;
   
   memberDeclaratorList
       : memberDeclarator (Comma memberDeclarator)*
       ;
   
   memberDeclarator
       : declarator (
           virtualSpecifierSeq
           | { this.IsPureSpecifierAllowed() }? pureSpecifier
           | { this.IsPureSpecifierAllowed() }? virtualSpecifierSeq pureSpecifier
           | braceOrEqualInitializer
       )
       | declarator
       | Identifier? attributeSpecifierSeq? Colon constantExpression
       ;
   
   virtualSpecifierSeq
       : virtualSpecifier+
       ;
   
   virtualSpecifier
       : Override
       | Final
       ;
   
   /*
    purespecifier: Assign '0'//Conflicts with the lexer ;
    */
   
   pureSpecifier
       : Assign IntegerLiteral
       ;
   
   /*Derived classes*/
   
   baseClause
       : Colon baseSpecifierList
       ;
   
   baseSpecifierList
       : baseSpecifier Ellipsis? (Comma baseSpecifier Ellipsis?)*
       ;
   
   baseSpecifier
       : attributeSpecifierSeq? (
           baseTypeSpecifier
           | Virtual accessSpecifier? baseTypeSpecifier
           | accessSpecifier Virtual? baseTypeSpecifier
       )
       ;
   
   classOrDeclType
       : nestedNameSpecifier? className
       | decltypeSpecifier
       ;
   
   baseTypeSpecifier
       : classOrDeclType
       ;
   
   accessSpecifier
       : Private
       | Protected
       | Public
       ;
   
   /*Special member functions*/
   
   conversionFunctionId
       : Operator conversionTypeId
       ;
   
   conversionTypeId
       : typeSpecifierSeq conversionDeclarator?
       ;
   
   conversionDeclarator
       : pointerOperator conversionDeclarator?
       ;
   
   constructorInitializer
       : Colon memInitializerList
       ;
   
   memInitializerList
       : memInitializer Ellipsis? (Comma memInitializer Ellipsis?)*
       ;
   
   memInitializer
       : meminitializerid (LeftParen expressionList? RightParen | bracedInitList)
       ;
   
   meminitializerid
       : classOrDeclType
       | Identifier
       ;
   
   /*Overloading*/
   
   operatorFunctionId
       : Operator theOperator
       ;
   
   literalOperatorId
       : Operator (StringLiteral Identifier | UserDefinedStringLiteral)
       ;
   
   /*Templates*/
   
   templateDeclaration
       : Template Less templateparameterList Greater declaration
       ;
   
   templateparameterList
       : templateParameter (Comma templateParameter)*
       ;
   
   templateParameter
       : typeParameter
       | parameterDeclaration
       ;
   
   typeParameter
       : ((Template Less templateparameterList Greater)? Class | Typename_) (
           Ellipsis? Identifier?
           | Identifier? Assign theTypeId
       )
       ;
   
   simpleTemplateId
       : templateName Less templateArgumentList? Greater
       ;
   
   templateId
       : simpleTemplateId
       | (operatorFunctionId | literalOperatorId) Less templateArgumentList? Greater
       ;
   
   templateName
       : Identifier
       ;
   
   templateArgumentList
       : templateArgument Ellipsis? (Comma templateArgument Ellipsis?)*
       ;
   
   templateArgument
       : theTypeId
       | constantExpression
       | idExpression
       ;
   
   typeNameSpecifier
       : Typename_ nestedNameSpecifier (Identifier | Template? simpleTemplateId)
       ;
   
   explicitInstantiation
       : Extern? Template declaration
       ;
   
   explicitSpecialization
       : Template Less Greater declaration
       ;
   
   /*Exception handling*/
   
   tryBlock
       : Try compoundStatement handlerSeq
       ;
   
   functionTryBlock
       : Try constructorInitializer? compoundStatement handlerSeq
       ;
   
   handlerSeq
       : handler+
       ;
   
   handler
       : Catch LeftParen exceptionDeclaration RightParen compoundStatement
       ;
   
   exceptionDeclaration
       : attributeSpecifierSeq? typeSpecifierSeq (declarator | abstractDeclarator)?
       | Ellipsis
       ;
   
   throwExpression
       : Throw assignmentExpression?
       ;
   
   exceptionSpecification
       : dynamicExceptionSpecification
       | noeExceptSpecification
       ;
   
   dynamicExceptionSpecification
       : Throw LeftParen typeIdList? RightParen
       ;
   
   typeIdList
       : theTypeId Ellipsis? (Comma theTypeId Ellipsis?)*
       ;
   
   noeExceptSpecification
       : Noexcept LeftParen constantExpression RightParen
       | Noexcept
       ;
   
   /*Preprocessing directives*/
   
   /*Lexer*/
   
   theOperator
       : New (LeftBracket RightBracket)?
       | Delete (LeftBracket RightBracket)?
       | Plus
       | Minus
       | Star
       | Div
       | Mod
       | Caret
       | And
       | Or
       | Tilde
       | Not
       | Assign
       | Greater
       | Less
       | GreaterEqual
       | PlusAssign
       | MinusAssign
       | StarAssign
       | ModAssign
       | XorAssign
       | AndAssign
       | OrAssign
       | Less Less
       | Greater Greater
       | RightShiftAssign
       | LeftShiftAssign
       | Equal
       | NotEqual
       | LessEqual
       | AndAnd
       | OrOr
       | PlusPlus
       | MinusMinus
       | Comma
       | ArrowStar
       | Arrow
       | LeftParen RightParen
       | LeftBracket RightBracket
       ;
   
   literal
       : IntegerLiteral
       | CharacterLiteral
       | FloatingLiteral
       | StringLiteral
       | BooleanLiteral
       | PointerLiteral
       | UserDefinedLiteral
       ;
   
   
   IntegerLiteral:
       DecimalLiteral Integersuffix?
       | OctalLiteral Integersuffix?
       | HexadecimalLiteral Integersuffix?
       | BinaryLiteral Integersuffix?
   ;
   
   CharacterLiteral: ('u' | 'U' | 'L')? '\'' Cchar+ '\'';
   
   FloatingLiteral:
       Fractionalconstant Exponentpart? Floatingsuffix?
       | Digitsequence Exponentpart Floatingsuffix?
   ;
   
   StringLiteral: Encodingprefix? (Rawstring | '"' Schar* '"');
   
   BooleanLiteral: False_ | True_;
   
   PointerLiteral: Nullptr;
   
   UserDefinedLiteral:
       UserDefinedIntegerLiteral
       | UserDefinedFloatingLiteral
       | UserDefinedStringLiteral
       | UserDefinedCharacterLiteral
   ;
   
   MultiLineMacro: '#' (~[\n]*? '\\' '\r'? '\n')+ ~ [\n]+ -> channel (HIDDEN);
   
   Directive: '#' ~ [\n]* -> channel (HIDDEN);
   /*Keywords*/
   
   Alignas: 'alignas';
   
   Alignof: 'alignof';
   
   Asm: 'asm';
   
   Auto: 'auto';
   
   Bool: 'bool';
   
   Break: 'break';
   
   Case: 'case';
   
   Catch: 'catch';
   
   Char: 'char';
   
   Char16: 'char16_t';
   
   Char32: 'char32_t';
   
   Class: 'class';
   
   Const: 'const';
   
   Constexpr: 'constexpr';
   
   Const_cast: 'const_cast';
   
   Continue: 'continue';
   
   Decltype: 'decltype';
   
   Default: 'default';
   
   Delete: 'delete';
   
   Do: 'do';
   
   Double: 'double';
   
   Dynamic_cast: 'dynamic_cast';
   
   Else: 'else';
   
   Enum: 'enum';
   
   Explicit: 'explicit';
   
   Export: 'export';
   
   Extern: 'extern';
   
   //DO NOT RENAME - PYTHON NEEDS True and False
   False_: 'false';
   
   Final: 'final';
   
   Float: 'float';
   
   For: 'for';
   
   Friend: 'friend';
   
   Goto: 'goto';
   
   If: 'if';
   
   Inline: 'inline';
   
   Int: 'int';
   
   Long: 'long';
   
   Mutable: 'mutable';
   
   Namespace: 'namespace';
   
   New: 'new';
   
   Noexcept: 'noexcept';
   
   Nullptr: 'nullptr';
   
   Operator: 'operator';
   
   Override: 'override';
   
   Private: 'private';
   
   Protected: 'protected';
   
   Public: 'public';
   
   Register: 'register';
   
   Reinterpret_cast: 'reinterpret_cast';
   
   Return: 'return';
   
   Short: 'short';
   
   Signed: 'signed';
   
   Sizeof: 'sizeof';
   
   Static: 'static';
   
   Static_assert: 'static_assert';
   
   Static_cast: 'static_cast';
   
   Struct: 'struct';
   
   Switch: 'switch';
   
   Template: 'template';
   
   This: 'this';
   
   Thread_local: 'thread_local';
   
   Throw: 'throw';
   
   //DO NOT RENAME - PYTHON NEEDS True and False
   True_: 'true';
   
   Try: 'try';
   
   Typedef: 'typedef';
   
   Typeid_: 'typeid';
   
   Typename_: 'typename';
   
   Union: 'union';
   
   Unsigned: 'unsigned';
   
   Using: 'using';
   
   Virtual: 'virtual';
   
   Void: 'void';
   
   Volatile: 'volatile';
   
   Wchar: 'wchar_t';
   
   While: 'while';
   /*Operators*/
   
   LeftParen: '(';
   
   RightParen: ')';
   
   LeftBracket: '[';
   
   RightBracket: ']';
   
   LeftBrace: '{';
   
   RightBrace: '}';
   
   Plus: '+';
   
   Minus: '-';
   
   Star: '*';
   
   Div: '/';
   
   Mod: '%';
   
   Caret: '^';
   
   And: '&';
   
   Or: '|';
   
   Tilde: '~';
   
   Not: '!' | 'not';
   
   Assign: '=';
   
   Less: '<';
   
   Greater: '>';
   
   PlusAssign: '+=';
   
   MinusAssign: '-=';
   
   StarAssign: '*=';
   
   DivAssign: '/=';
   
   ModAssign: '%=';
   
   XorAssign: '^=';
   
   AndAssign: '&=';
   
   OrAssign: '|=';
   
   LeftShiftAssign: '<<=';
   
   RightShiftAssign: '>>=';
   
   Equal: '==';
   
   NotEqual: '!=';
   
   LessEqual: '<=';
   
   GreaterEqual: '>=';
   
   AndAnd: '&&' | 'and';
   
   OrOr: '||' | 'or';
   
   PlusPlus: '++';
   
   MinusMinus: '--';
   
   Comma: ',';
   
   ArrowStar: '->*';
   
   Arrow: '->';
   
   Question: '?';
   
   Colon: ':';
   
   Doublecolon: '::';
   
   Semi: ';';
   
   Dot: '.';
   
   DotStar: '.*';
   
   Ellipsis: '...';
   
   fragment Hexquad: HEXADECIMALDIGIT HEXADECIMALDIGIT HEXADECIMALDIGIT HEXADECIMALDIGIT;
   
   fragment Universalcharactername: '\\u' Hexquad | '\\U' Hexquad Hexquad;
   
   Identifier:
       /*
   	 Identifiernondigit | Identifier Identifiernondigit | Identifier DIGIT
   	 */ Identifiernondigit (Identifiernondigit | DIGIT)*
   ;
   
   fragment Identifiernondigit: NONDIGIT | Universalcharactername;
   
   fragment NONDIGIT: [a-zA-Z_];
   
   fragment DIGIT: [0-9];
   
   DecimalLiteral: NONZERODIGIT ('\''? DIGIT)*;
   
   OctalLiteral: '0' ('\''? OCTALDIGIT)*;
   
   HexadecimalLiteral: ('0x' | '0X') HEXADECIMALDIGIT ( '\''? HEXADECIMALDIGIT)*;
   
   BinaryLiteral: ('0b' | '0B') BINARYDIGIT ('\''? BINARYDIGIT)*;
   
   fragment NONZERODIGIT: [1-9];
   
   fragment OCTALDIGIT: [0-7];
   
   fragment HEXADECIMALDIGIT: [0-9a-fA-F];
   
   fragment BINARYDIGIT: [01];
   
   Integersuffix:
       Unsignedsuffix Longsuffix?
       | Unsignedsuffix Longlongsuffix?
       | Longsuffix Unsignedsuffix?
       | Longlongsuffix Unsignedsuffix?
   ;
   
   fragment Unsignedsuffix: [uU];
   
   fragment Longsuffix: [lL];
   
   fragment Longlongsuffix: 'll' | 'LL';
   
   fragment Cchar: ~ ['\\\r\n] | Escapesequence | Universalcharactername;
   
   fragment Escapesequence: Simpleescapesequence | Octalescapesequence | Hexadecimalescapesequence;
   
   fragment Simpleescapesequence:
       '\\\''
       | '\\"'
       | '\\?'
       | '\\\\'
       | '\\a'
       | '\\b'
       | '\\f'
       | '\\n'
       | '\\r'
       | '\\' ('\r' '\n'? | '\n')
       | '\\t'
       | '\\v'
   ;
   
   fragment Octalescapesequence:
       '\\' OCTALDIGIT
       | '\\' OCTALDIGIT OCTALDIGIT
       | '\\' OCTALDIGIT OCTALDIGIT OCTALDIGIT
   ;
   
   fragment Hexadecimalescapesequence: '\\x' HEXADECIMALDIGIT+;
   
   fragment Fractionalconstant: Digitsequence? '.' Digitsequence | Digitsequence '.';
   
   fragment Exponentpart: 'e' SIGN? Digitsequence | 'E' SIGN? Digitsequence;
   
   fragment SIGN: [+-];
   
   fragment Digitsequence: DIGIT ('\''? DIGIT)*;
   
   fragment Floatingsuffix: [flFL];
   
   fragment Encodingprefix: 'u8' | 'u' | 'U' | 'L';
   
   fragment Schar: ~ ["\\\r\n] | Escapesequence | Universalcharactername;
   
   fragment Rawstring: 'R"' ( '\\' ["()] | ~[\r\n (])*? '(' ~[)]*? ')' ( '\\' ["()] | ~[\r\n "])*? '"';
   
   UserDefinedIntegerLiteral:
       DecimalLiteral Udsuffix
       | OctalLiteral Udsuffix
       | HexadecimalLiteral Udsuffix
       | BinaryLiteral Udsuffix
   ;
   
   UserDefinedFloatingLiteral:
       Fractionalconstant Exponentpart? Udsuffix
       | Digitsequence Exponentpart Udsuffix
   ;
   
   UserDefinedStringLiteral: StringLiteral Udsuffix;
   
   UserDefinedCharacterLiteral: CharacterLiteral Udsuffix;
   
   fragment Udsuffix: Identifier;
   
   Whitespace: [ \t]+ -> skip;
   
   Newline: ('\r' '\n'? | '\n') -> skip;
   
   BlockComment: '/*' .*? '*/' -> skip;
   
   LineComment: '//' ~ [\r\n]* -> skip;
   ```

   在文件夹中新建一个CPP14ParserBase.ts文件，内容如下：

   ```ts
   import {Parser, Lexer, Token, TokenStream, ParserRuleContext} from "antlr4";
   import CPP14Parser from './CPP14Parser';
   import ParametersAndQualifiersContext from './CPP14Parser';
   
   export default abstract class CPP14ParserBase extends Parser {
   
       constructor(input: TokenStream) {
           super(input);
       }
   
       protected IsPureSpecifierAllowed() : boolean {
           try {
               var x = this._ctx; // memberDeclarator
               if (!x || !x.children) {
                   return false;
               }
               const c = (x.children[0] as ParserRuleContext)?.children?.[0] as ParserRuleContext;
               if (!c || !c.children) {
                   return false;
               }
               var c2 = c.children[0] as ParserRuleContext;
               if (!c2 || !c2.children) {
                   return false;
               }
               var p = c2.children[1] as ParserRuleContext;
   	        if (p == undefined)
   		    return false;
   	        var r = p.constructor.name === "ParametersAndQualifiersContext";
   	        return r;
           } catch (e) {
           }
           return false;
       }
   }
   
   ```

2. 在该语法文件所在目录下打开命令行窗口，输入以下命令生成TypeScript解析器

   ```
   antlr4 -Dlanguage=TypeScript -listener CPP14.g4
   ```

   生成文件如下

   ![image-9](.\images\image-9.png)

3. 配置TypeScript项目，即在语法文件所在目录下输入以下命令:

   ```
   npm init -y
   npm install antlr4
   npm install @types/node --save-dev
   ```

   并在语法文件所在目录下新建一tsconfig.json文件，文件内容如下：

   ```json
   {
      "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "strict": true,
      }
   }
   ```

4. 在语法文件同级目录下新建一文件CPPListener.ts，文件内容如下：

   ```ts
   import { TerminalNode, ErrorNode, ParserRuleContext } from 'antlr4';
   import CPP14Listener from './CPP14Listener';
   import { SelectionStatementContext, ClassSpecifierContext, FunctionSpecifierContext } from './CPP14Parser';
   
   export class CPPListener implements CPP14Listener {
       private blockDeclarations: string[] = [];
       private functionDefinitions: string[] = [];
       private selectionStatements: string[] = [];
       private classSpecifiers: string[] = [];
       
   	enterFunctionDefinition(ctx: FunctionDefinitionContext) {
           const functionDefinition = ctx.getText();
           this.functionDefinitions.push(functionDefinition);
           console.log(`[Listener] functionDefinition: ${functionDefinition}`)
       }
       exitFunctionDefinition(ctx: FunctionDefinitionContext) {}
       
       enterSelectionStatement(ctx: SelectionStatementContext) {
           const selectionStatement = ctx.getText();
           this.selectionStatements.push(selectionStatement);
           console.log(`[Listener] Selection statement: ${selectionStatement}`);
       }
       exitSelectionStatement(ctx: SelectionStatementContext) {}
   
       enterClassSpecifier(ctx: ClassSpecifierContext) {
           const classSpecifier = ctx.getText();
           this.classSpecifiers.push(classSpecifier);
           console.log(`[Listener] Class specifier: ${classSpecifier}`);
       }
       exitClassSpecifier(ctx: ClassSpecifierContext) {}
   
       visitTerminal(node: TerminalNode): void {}
   
       visitErrorNode(node: ErrorNode): void {
           console.error(`[Listener] ${node.toString()}`);
       }
   
       enterEveryRule(ctx: ParserRuleContext): void {
           // console.log(`[Listener] Enter rule: ${ctx}`);
       }
       exitEveryRule(ctx: ParserRuleContext): void {
           // console.log(`[Listener] Exit rule: ${ctx}`);
       }
   
       printMessage() {
           console.log(`[Listener] Parsing Complete!`);
           console.log(`[Listener] Function definitions: ${this.functionDefinitions}`);
           console.log(`[Listener] Selection statements: ${this.selectionStatements}`);
           console.log(`[Listener] Class specifiers: ${this.classSpecifiers}`);
       }
   }
   ```

5. 编写解析代码，即在语法文件所在目录下新建一index.ts文件，内容如下：

   ```ts
   import { CharStreams, CommonTokenStream, ParseTreeWalker, ParseTree, RuleContext, TerminalNode  } from 'antlr4';
   import CPP14Lexer from './CPP14Lexer';
   import CPP14Parser from './CPP14Parser';
   import { CPPListener } from './CPPListener';
   
   function parseWithListener(content: string) {
       const inputStream = CharStreams.fromString(content);
       const lexer = new CPP14Lexer(inputStream);
       const tokenStream = new CommonTokenStream(lexer);
       const parser = new CPP14Parser(tokenStream);
       const tree = parser.translationUnit();
       const listener = new CPPListener();
       const walker = new ParseTreeWalker();
       walker.walk(listener, tree);
       listener.printMessage();
       
       return tree;
   }
   
   const testInput = `
   #include<cstdio>
   #include<memory>
   #include"cfi_util.h"
   
   class A {
   public:
       virtual void f(){
           printf("baseA");
       }
       virtual ~A(){}
   };
   
   class B : public A{
   public:
       void f() override{
           printf("subclassB");
       }
       ~B() override{}
   };
   
   class C: public A{
   public:
       void f() override{
           printf("subclassC");
       }
       ~C() override{}
   };
   
   int main(){
   
       if(DEBUG){
           ShowCfiLogFile();
       }
       ClearCfiLog();
       if(DEBUG){
           ShowCfiLogFile();
       }
       
       //This test will trigger a subclass parent class conversion CFI check failure
       std::shared_ptr<B> b_ptr = std::make_shared<B>();
       std::shared_ptr<A> a_ptr = b_ptr;
       int* a_vtable = (int*)a_ptr.get();
       printf("a_vtable: %x",*a_vtable);
       std::shared_ptr<C> c_ptr = std::static_pointer_cast<C>(a_ptr);
       FindAndCheck("'C' failed during base-to-derived cast");
       
       ClearCfiLog();
       if(DEBUG){
           ShowCfiLogFile();
       }
       return 0;
   }
   `;
   
   const parseTree = parseWithListener(testInput);
   console.log(parseTree);
   ```

6. 编译并运行解析器

   ```
   npx tsc
   node index.js
   ```

   获得解析结果如下
   ![image-10](.\images\image-10.png)
