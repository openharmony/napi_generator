# cJSON tests 目录测试设计文档

本文档整理 `cJSON-master/tests` 目录下的测试用例、测试数据与测试接口覆盖关系，便于与 NAPI 层 Cjsondts.test.ets 对照与补全。

---

## 一、目录结构概览

```
tests/
├── CMakeLists.txt          # 测试构建配置，定义 unity_tests 列表
├── common.h                # 公共头：reset()、read_file()、断言宏
├── unity_setup.c           # Unity setUp/tearDown 空实现
├── unity/                  # Unity 测试框架源码
├── inputs/                 # 测试数据（见第二节）
│   ├── test1 .. test11     # 输入 JSON 文件
│   └── test1.expected .. test11.expected  # 期望打印结果
├── json-patch-tests/       # cJSON_Utils 相关测试数据（可选）
├── parse_examples.c        # 基于文件的解析/打印测试
├── parse_number.c
├── parse_hex4.c
├── parse_string.c
├── parse_array.c
├── parse_object.c
├── parse_value.c
├── parse_with_opts.c
├── print_string.c
├── print_number.c
├── print_array.c
├── print_object.c
├── print_value.c
├── misc_tests.c            # 综合与边界（null、类型、引用、内存等）
├── compare_tests.c
├── cjson_add.c             # Add* 系列与创建数组
├── minify_tests.c
├── readme_examples.c       # README 示例场景
├── json_patch_tests.c      # Utils 扩展（需 ENABLE_CJSON_UTILS）
├── old_utils_tests.c
└── misc_utils_tests.c
```

---

## 二、测试数据（inputs/）

| 文件 | 用途 | 说明 |
|------|------|------|
| test1 | 解析+打印 | 嵌套对象（glossary/GlossDiv/GlossList 等），含数组 |
| test2 ~ test5, test7~test11 | 解析+打印 | 由 parse_examples 的 file_testN_should_be_parsed_and_printed 使用 |
| test6 | 不应解析 | file_test6_should_not_be_parsed（非法 JSON） |
| test1.expected ~ test11.expected | 期望输出 | 与 testN 对应，为 cJSON_Print 后的标准形式 |

**使用方式**：parse_examples.c 中 do_test("test1") 等会读取 inputs/test1 与 inputs/test1.expected，解析后 cJSON_Print 再与 expected 字符串比较。

---

## 三、测试套件与用例列表（按 CMakeLists 中 unity_tests 顺序）

### 3.1 parse_examples

- file_test1~5, 7~11_should_be_parsed_and_printed：解析 inputs/testN，打印与 testN.expected 比较
- file_test6_should_not_be_parsed：test6 非法，期望解析失败
- test12_should_not_be_parsed、test14_should_not_be_parsed：非法 JSON
- test13_should_be_parsed_without_null_termination：无尾零 buffer 解析
- test15_should_not_heap_buffer_overflow：防溢出

**涉及接口**：cJSON_Parse、cJSON_Print、read_file。

### 3.2 parse_number

- parse_number_should_parse_zero / negative_integers / positive_integers / positive_reals / negative_reals / big_numbers

**涉及接口**：cJSON_Parse、cJSON_IsNumber、valueint/valuedouble。

### 3.3 parse_hex4

- parse_hex4_should_parse_all_combinations、parse_hex4_should_parse_mixed_case

**涉及接口**：内部 parse_hex4（非 CJSON_PUBLIC）。

### 3.4 parse_string

- parse_string_should_parse_strings / utf16_surrogate_pairs / not_parse_non_strings / not_parse_invalid_backslash / not_overflow_with_closing_backslash / parse_bug_94

**涉及接口**：cJSON_Parse、cJSON_IsString、valuestring。

### 3.5 parse_array

- parse_array_should_parse_empty_arrays / arrays_with_one_element / arrays_with_multiple_elements、parse_array_should_not_parse_non_arrays

**涉及接口**：cJSON_Parse、cJSON_IsArray、cJSON_GetArraySize、cJSON_GetArrayItem。

### 3.6 parse_object

- parse_object_should_parse_empty_objects / objects_with_one_element / objects_with_multiple_elements、parse_object_should_not_parse_non_objects

**涉及接口**：cJSON_Parse、cJSON_IsObject、cJSON_GetObjectItem。

### 3.7 parse_value

- parse_value_should_parse_null / true / false / number / string / array / object

**涉及接口**：cJSON_Parse、各 Is* 类型判断。

### 3.8 print_string / print_number / print_array / print_object / print_value

各类型打印：空串、ASCII、UTF-8、0、正负整数、实数、空数组/单元素/多元素、空对象/单键/多键、null/true/false 等。

**涉及接口**：cJSON_Print、各 Create* 与打印行为。

### 3.9 misc_tests

- cjson_array_foreach_*：cJSON_ArrayForEach 宏
- cjson_get_object_item_* / cjson_get_object_item_case_sensitive_*：GetObjectItem、对数组调用返回 NULL
- typecheck_functions_should_check_type：IsInvalid/IsFalse/IsTrue/IsBool/IsNull/IsNumber/IsString/IsArray/IsObject/IsRaw
- cjson_should_not_parse_to_deeply_nested_jsons、cjson_should_not_follow_too_deep_circular_references
- cjson_set_number_value_*、cjson_detach_item_via_pointer_*、cjson_replace_item_*
- cjson_functions_should_not_crash_with_null_pointers：大量 API 传 NULL 不崩溃
- cjson_set_valuestring_*、ensure_should_fail_on_failed_realloc
- skip_utf8_bom_*、cjson_get_string_value_*、cjson_get_number_value_*
- cjson_create_*_reference_*、cjson_add_item_to_object_or_array_should_not_add_itself
- cjson_delete_item_from_array_*、cjson_set_valuestring_to_object_*、cjson_set_bool_value_*
- cjson_parse_big_numbers_*

**涉及接口**：Parse/Print/Get/Add/Replace/Detach/Delete/Insert、Create*、Compare、Minify、SetValuestring、SetNumberHelper、Duplicate、GetErrorPtr、ArrayForEach 等全量 null 安全。

### 3.10 parse_with_opts

- parse_with_opts_should_handle_null / empty_strings / incomplete_json / require_null_if_requested / return_parse_end / parse_utf8_bom

**涉及接口**：cJSON_ParseWithOpts。

### 3.11 compare_tests

- cjson_compare_should_compare_null_pointer_as_not_equal / invalid_as_not_equal / numbers / booleans / null / not_accept_invalid_types / strings / raw / arrays / objects

**涉及接口**：cJSON_Compare。

### 3.12 cjson_add

- cjson_add_null/true/false/bool/number/string/raw_should_add_* 及 _should_fail_with_null_pointers / _should_fail_on_allocation_failure
- cJSON_add_object_should_add_object、cjson_add_array_should_add_array 及失败分支
- cjson_create_int/float/double/string_array_should_fail_on_allocation_failure

**涉及接口**：AddNullToObject、AddTrueToObject、AddFalseToObject、AddBoolToObject、AddNumberToObject、AddStringToObject、AddRawToObject、AddObjectToObject、AddArrayToObject、CreateIntArray/CreateFloatArray/CreateDoubleArray/CreateStringArray。

### 3.13 readme_examples

- create_monitor_should_create_a_monitor、create_monitor_with_helpers_*、supports_full_hd_*

**涉及接口**：CreateObject/Array、AddItemToObject/Array、GetObjectItem、GetArrayItem、GetArraySize、Print。

### 3.14 minify_tests

- cjson_minify_should_not_overflow_buffer / remove_single_line_comments / remove_spaces / remove_multiline_comments / not_modify_strings / minify_json / not_loop_infinitely

**涉及接口**：cJSON_Minify。

---

## 四、测试接口覆盖汇总（按 C API 分类）

| API 类别 | 涉及测试文件 |
|----------|--------------|
| 解析 | parse_examples, parse_number, parse_string, parse_array, parse_object, parse_value, parse_with_opts, parse_hex4, misc_tests |
| 打印 | parse_examples, print_*, misc_tests |
| 类型判断 | parse_*, print_value, misc_tests |
| 创建 | print_*, cjson_add, readme_examples, misc_tests |
| 获取 | parse_*, misc_tests, readme_examples |
| 添加/替换/删除 | cjson_add, misc_tests |
| 其他 | compare_tests, minify_tests, misc_tests（Compare、Minify、Set*、Duplicate、GetErrorPtr、ArrayForEach） |

---

## 五、测试框架与约定

- **框架**：Unity，用例为 static void test_xxx(void)，通过 RUN_TEST 或自动生成 Runner 执行。
- **生命周期**：unity_setup.c 提供空的 setUp/tearDown。
- **测试数据**：inputs/ 下文件由 read_file() 读取。
- **断言**：TEST_ASSERT_* 系列及 common.h 中的 assert_has_type、assert_has_child 等宏。
