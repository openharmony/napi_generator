# cJSON C 测试与 Cjsondts.test.ets 对比文档

本文档对比 **cJSON-master/tests** 目录下的 C 层单元测试与 **entry/src/ohosTest/ets/test/Cjsondts.test.ets** 中的 NAPI 层测试用例，列出差异与覆盖关系，便于补全 NAPI 测试或对齐设计。

---

## 一、C 侧测试套件与用例数量

| 测试文件 | 用例数量（约） | 主要覆盖 |
|----------|----------------|----------|
| parse_examples | 15 | 文件解析/打印、非法 JSON、无尾零、溢出 |
| parse_number | 6 | 数字解析（0、正负整数、实数、大数） |
| parse_hex4 | 2 | 内部 hex4 解析 |
| parse_string | 6 | 字符串、UTF-16、非法、bug94 |
| parse_array | 4 | 空/单/多元素、非数组 |
| parse_object | 4 | 空/单/多键、非对象 |
| parse_value | 7 | null/true/false/number/string/array/object |
| parse_with_opts | 6 | NULL、空串、不完整、BOM、parse_end |
| print_string | 4 | 空串、ASCII、UTF-8 |
| print_number | 6 | 0、正负整数、实数、非数字 |
| print_array | 4 | 空/单/多元素 |
| print_object | 4 | 空/单/多键 |
| print_value | 8 | 各类型打印 |
| misc_tests | 30+ | null 安全、类型检查、引用、深度、循环、Set*、Detach/Replace、内存 |
| compare_tests | 10 | Compare 各类型与 null/invalid |
| cjson_add | 30+ | Add*ToObject 及 null/alloc 失败 |
| minify_tests | 7 | Minify 行为与边界 |
| readme_examples | 3 | README 示例场景 |

**合计**：C 侧约 170+ 个独立用例（按 static void 函数计），覆盖解析、打印、类型、创建、获取、添加/替换/删除、Compare、Minify、null/alloc 边界等。

---

## 二、Cjsondts.test.ets 用例列表（68 个 it）

| # | 用例名 |
|---|--------|
| 1 | cjsonVersion_returns_string |
| 2 | cjsonParse_valid_json_returns_handle |
| 3 | cjsonParse_invalid_json_returns_zero |
| 4 | cjsonPrint_after_parse |
| 5 | cjsonGetObjectItem_and_getStringValue |
| 6 | cjsonGetObjectItem_and_getNumberValue |
| 7 | cjsonIsObject_on_root |
| 8 | cjsonCreateObject_addItemToObject_print |
| 9 | cjsonCreateArray_getArraySize |
| 10 | cjsonGetArrayItem |
| 11 | cjsonIsArray_on_array |
| 12 | cjsonCreateNull_isNull |
| 13 | add_tc_001_still_works |
| 14 | cjsonParseWithLength_returns_handle |
| 15 | cjsonPrintUnformatted_no_whitespace |
| 16 | cjsonPrintBuffered_formatted |
| 17 | cjsonGetObjectItemCaseSensitive |
| 18 | cjsonHasObjectItem_true |
| 19 | cjsonHasObjectItem_false |
| 20 | cjsonGetErrorPtr_after_invalid_parse |
| 21 | cjsonCreateTrue_isTrue |
| 22 | cjsonCreateFalse_isFalse |
| 23 | cjsonCreateBool |
| 24 | cjsonCreateRaw |
| 25 | cjsonCreateStringReference |
| 26 | cjsonCreateObjectReference |
| 27 | cjsonCreateArrayReference |
| 28 | cjsonCreateIntArray |
| 29 | cjsonCreateDoubleArray |
| 30 | cjsonCreateStringArray |
| 31 | cjsonAddItemToObjectCS |
| 32 | cjsonAddItemReferenceToArray |
| 33 | cjsonAddItemReferenceToObject |
| 34 | cjsonDetachItemFromArray |
| 35 | cjsonDeleteItemFromArray |
| 36 | cjsonDetachItemFromObject |
| 37 | cjsonDeleteItemFromObject |
| 38 | cjsonInsertItemInArray |
| 39 | cjsonReplaceItemInArray |
| 40 | cjsonReplaceItemInObject |
| 41 | cjsonReplaceItemViaPointer |
| 42 | cjsonDuplicate |
| 43 | cjsonCompare_equal |
| 44 | cjsonCompare_not_equal |
| 45 | cjsonMinify |
| 46 | cjsonAddNullToObject |
| 47 | cjsonAddTrueToObject |
| 48 | cjsonAddFalseToObject |
| 49 | cjsonAddBoolToObject |
| 50 | cjsonAddNumberToObject |
| 51 | cjsonAddStringToObject |
| 52 | cjsonAddRawToObject |
| 53 | cjsonAddObjectToObject |
| 54 | cjsonAddArrayToObject |
| 55 | cjsonSetNumberHelper |
| 56 | cjsonSetValuestring |
| 57 | cjsonIsString_on_string |
| 58 | cjsonIsNumber_on_number |
| 59 | cjsonDetachItemFromObjectCaseSensitive |
| 60 | cjsonDeleteItemFromObjectCaseSensitive |
| 61 | cjsonReplaceItemInObjectCaseSensitive |
| 62 | cjsonCreateFloatArray |
| 63 | cjsonParse_empty_string_returns_zero |
| 64 | cjsonGetObjectItem_on_array_root_returns_invalid_handle |
| 65 | cjsonGetObjectItem_missing_key_returns_invalid_handle |
| 66 | cjsonHasObjectItem_missing_key_returns_false |
| 67 | cjsonGetArrayItem_out_of_bounds_returns_invalid_handle |
| 68 | cjsonGetObjectItemCaseSensitive_exact_key |

**说明**：add_tc_001_still_works 为模板自带的 add() 接口，非 cJSON；其余 67 个为 cJSON NAPI 相关。

---

## 三、差异分析

### 3.1 C 有而 Cjsondts 未单独覆盖的场景

| 类别 | C 侧用例/场景 | Cjsondts 现状 |
|------|----------------|----------------|
| 文件数据 | parse_examples 使用 inputs/test1~test11 及 .expected 做解析+打印对比 | 无文件 IO；使用内联 JSON 字符串，无与“期望文件”的对比 |
| 解析边界 | parse_with_opts 空串、不完整 JSON、require_null、return_parse_end、BOM | 仅有 cjsonParse_empty_string_returns_zero；无 ParseWithOpts 选项、无 BOM/parse_end 测试 |
| 深度/循环 | cjson_should_not_parse_to_deeply_nested_jsons、cjson_should_not_follow_too_deep_circular_references | 无深度嵌套、无循环引用用例 |
| 数字边界 | parse_number 大数、正负实数多种取值 | 有 CreateNumber/GetNumberValue，无系统化“大数/实数”边界数据 |
| 字符串边界 | parse_string UTF-16 代理对、invalid backslash、bug94 | 无 UTF-16/代理对、无非法转义专项 |
| 打印专项 | print_* 各类型多种输入（0、负整数、UTF-8 等） | 有 Print/PrintUnformatted/PrintBuffered，无按类型的多组打印断言 |
| ArrayForEach | cjson_array_foreach_* | NAPI 未导出 ArrayForEach 宏，无对应用例 |
| Null/alloc 安全 | cjson_functions_should_not_crash_with_null_pointers 全量 NULL | 部分边界（空串、missing key、array 上 GetObjectItem、越界 GetArrayItem）；无系统化“传 0 handle”的 null 安全 |
| 分配失败 | cjson_add_*_should_fail_on_allocation_failure、ensure_should_fail_on_failed_realloc | 无 malloc/realloc 失败模拟 |
| SetValuestring 重叠 | cjson_set_valuestring_should_return_null_if_strings_overlap | 无 |
| Minify 细节 | 单行/多行注释、不修改字符串、不无限循环 | 仅有 cjsonMinify 基础用例 |
| Compare 细分 | compare_tests 中 null/invalid/numbers/booleans/null/strings/raw/arrays/objects | 仅有 cjsonCompare_equal、cjsonCompare_not_equal |
| Add 失败分支 | cjson_add_*_should_fail_with_null_pointers / _on_allocation_failure | 仅有正向 Add* 成功用例 |
| 自引用 | cjson_add_item_to_object_or_array_should_not_add_itself | 无 |
| parse_hex4 | 内部实现，非公开 API | NAPI 无对应接口，无需覆盖 |

### 3.2 Cjsondts 有而 C 未单独成用例的接口

| 用例名 | 说明 |
|--------|------|
| cjsonVersion_returns_string | C 测试中未单独测 Version，NAPI 暴露故有 |
| add_tc_001_still_works | 模板 add()，非 cJSON |
| cjsonGetObjectItem_on_array_root_returns_invalid_handle | 与 C 的 cjson_get_object_item_should_not_crash_with_array 对应，NAPI 显式写成用例 |
| cjsonGetObjectItem_missing_key_returns_invalid_handle | 与 C 的“找不到返回 NULL”对应 |
| cjsonHasObjectItem_missing_key_returns_false | 与 C 的 HasObjectItem(item, NULL) 等对应，NAPI 单独场景 |
| cjsonGetArrayItem_out_of_bounds_returns_invalid_handle | C 有 GetArrayItem(NULL,0)，NAPI 补充越界 |
| cjsonGetObjectItemCaseSensitive_exact_key | NAPI 侧强调大小写与缺失 key |
| cjsonParse_empty_string_returns_zero | 与 parse_with_opts_should_handle_empty_strings 对应 |

### 3.3 测试数据与手段差异

| 维度 | C tests | Cjsondts.test.ets |
|------|---------|-------------------|
| 数据来源 | 文件 inputs/testN、testN.expected | 内联 JSON 字符串，无外部文件 |
| 断言方式 | TEST_ASSERT_*、assert_has_type 等，与 expected 文件逐字节比 | expect(...).assertEqual(...)，字符串用 includes 等 |
| 框架 | Unity（RUN_TEST） | Hypium（describe/it） |
| 句柄 | 直接 cJSON* 指针 | NAPI 句柄（int64），0 表示无效 |
| 清理 | cJSON_Delete(item) | lib.cjsonDelete(handle) |
| 常量 | 魔数或局部常量 | constant.ets（INVALID_HANDLE、VAL_0、TEST_FILTER 等） |

---

## 四、接口覆盖对照表（简要）

| C API 类别 | C 测试覆盖 | Cjsondts 覆盖 | 备注 |
|-------------|------------|----------------|------|
| Parse / ParseWithOpts | 多文件、多边界 | Parse、ParseWithLength、空串、无效 JSON | NAPI 无 ParseWithOpts 选项/BOM/parse_end |
| Print / PrintUnformatted / PrintBuffered | 多类型、多组数据 | 有，一组典型 | 可补多组打印断言 |
| GetObjectItem / GetObjectItemCaseSensitive | 有，含 null/array | 有，含 array 根、missing key、exact_key | 基本对齐 |
| GetArrayItem / GetArraySize | 有 | 有，含越界 | 对齐 |
| HasObjectItem | 有（含 NULL） | 有 true/false/missing_key | 对齐 |
| Create*（Object/Array/String/Number/True/False/Null/Raw） | 有 | 有 | 对齐 |
| Create*Reference | 有 | 有 | 对齐 |
| Create*Array（Int/Float/Double/String） | 有，含 alloc 失败 | 有，无 alloc 失败 | 可补失败场景（若 NAPI 可测） |
| AddItemToObject/Array、AddItemToObjectCS、Add*ToObject | 有，含 null/alloc 失败 | 有正向，无失败分支 | 可补 null 入参（0 handle） |
| AddItemReference* | 有 | 有 | 对齐 |
| Detach* / Delete* / Replace* / InsertItemInArray | 有，含 null | 有 | 基本对齐 |
| Duplicate / Compare | 有细分类型 | 有 equal/not_equal | 可补 Compare 更多类型 |
| Minify | 多场景（注释、空格、循环） | 有基础 | 可补注释/空格等 |
| SetNumberHelper / SetValuestring | 有，含重叠/NULL | 有基础 | SetValuestring 可补重叠（若 NAPI 可测） |
| GetStringValue / GetNumberValue | 有 | 有（组合在 GetObjectItem 等中） | 对齐 |
| Is* 类型判断 | 有（含 NULL） | 有部分（IsObject/IsArray/IsNull/IsTrue/IsFalse/IsBool/IsString/IsNumber） | 可补 IsInvalid/IsRaw 等 |
| GetErrorPtr | 未单独成套件 | 有 cjsonGetErrorPtr_after_invalid_parse | NAPI 已覆盖 |
| Version | 无 | 有 | NAPI 独有 |
| ArrayForEach | 有 | 未导出 | 无对应 NAPI |

---

## 五、建议补全方向（Cjsondts 侧）

1. **边界与无效输入**：对 Parse/Get*/Add* 等增加“传 0 handle”或无效参数的用例（在 NAPI 允许的范围内），对齐 C 的 null 安全思路。
2. **Compare**：增加 Compare 对 null、string、number、array 等类型的专门用例。
3. **Minify**：若有兴趣可补“带注释/空格的输入”与“不修改字符串”的断言（若 NAPI 行为与 C 一致）。
4. **打印**：对 Print/PrintUnformatted/PrintBuffered 增加多组输入与期望子串断言，缩小与 C print_* 的差距。
5. **数据**：若需与 C 的 inputs/testN 对齐，可在 Cjsondts 中用内联字符串复刻 test1 等典型 JSON，做解析+打印后的 includes 或关键路径断言，而不依赖文件 IO。

本文档与 `cJSON_tests_design.md` 配合使用：前者描述 C 侧测试设计与数据，本文描述 C 与 Cjsondts 的差异与对照关系。
