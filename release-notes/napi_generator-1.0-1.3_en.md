# napi_generator-1.3 (2022-01-30)

## Version Overview<a name="section249611124916"></a>

Release napi_generator-1.3.

## Version Features<a name="section249611124917"></a>
**Table 1**  Supported Features

[Currently known unsupported recommended solutions](https://gitee.com/openharmony/napi_generator/blob/master/docs/SOLUTION.md)

<a name="table143385853320"></a>

<table><thead align="center"><tr id="row53375863312"><th class="cellrowborder" valign="top" width="18%" id="mcps1.2.3.1.1"><p id="p20331858193317"><a name="p20331858193317"></a><a name="p20331858193317"></a><ul>Category</ul></p>
</th>
<th class="cellrowborder" valign="top" width="45%" id="mcps1.2.3.1.2"><p id="p1133115820331"><a name="p1133115820331"></a><a name="p1133115820331"></a><ul>Supported Features</ul></p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.3.1.3"><p id="p1133115820331"><a name="p1133115820333"></a><a name="p1133115820333"></a><ul>Test Cases</ul></p>
</th>
<th class="cellrowborder" valign="top" width="12%" id="mcps1.2.3.1.4"><p id="p1133115820332"><a name="p1133115820332"></a><a name="p1133115820332"></a><ul>Version</ul></p>
</th>
</tr>
</thead>
<tbody><tr id="row333115812331"><td class="cellrowborder" valign="top" width="18%" headers="mcps1.2.3.1.1 "><p id="p2142111345714"><a name="p2142111345714"></a><a name="p2142111345714"></a><ul>Variables/Return Values</ul></p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.3.1.2 "><a name="ul9264132010"></a><a name="ul9264132010"></a><ul id="ul9264132010"><li>Support automatic conversion of string, number, boolean basic type variables/function parameters in TS language to C++ types</li><li>Support automatic conversion of interface and anonymous interface composite type variables/function parameters in TS language to C++ types</li><li>Support automatic conversion of enum composite type variables/function parameters in TS language to C++ types [Note: enum basic types support string, number types]</li><li>Support automatic conversion of string, number, boolean, enum, interface, map array type variables/function parameters in TS language to C++ types, with array notation supporting both array<> or [] forms</li><li>Support automatic conversion of string, number, boolean, array, map, interface map type variables/function parameters in TS language to C++ types, with map notation supporting both {[key:string]:any} or Map<> forms [Note: map keys only support string type, values support string/number/boolean/map/array types]</li><li>Support conversion of any type variables or function parameters in namespace domain of TS interface files to corresponding C++ type variables [Note: any scope is string/number/boolean/map(string/number/boolean/array type map)/array type(string/number/boolean/map type array)]</li><li>Support conversion of object variables in namespace domain of TS interface files to corresponding C++ variables [Note: object_value types are string/number/boolean/object]</li><li>Support conversion of optional variables in namespace domain of TS interface files to corresponding C++ variables</li><li>Support conversion of multi-type merged new type variables in namespace domain of TS interface files to corresponding C++ type variables [Note: type scope: number/string/boolean]</li></ul>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1.3 ">
<ul id="ult940244418001">
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_string">string test case</a>、<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_number">number test case</a>、<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_bool">boolean test case</a>
</li>
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_interface">interface test case</a>、<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_interface_no_name">anonymous interface test case</a>
</li>
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_enum">enum test case</a>、<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_enum_interface">enum_interface test case</a>、<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_enum_js">enum_JS test case</a>
</li>
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_[]">[] array test case</a>、<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_array">array test case</a>
</li>
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_map">map test case</a>、<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_array_map">array map test case</a>
</li>
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_any">any test case</a>、<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_any[]">any[] test case</a>
</li>
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_object">object test case</a>
</li>
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_optional">optional variable test case</a>
</li>
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_union">union test case</a>
</li>
</ul>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.4 "><p id="p2142111345715"><a name="p2142111345715"></a><a name="p2142111345715"></a><ul>V1.2</ul></p>
</td>
</tr>
<tr id="row334175803317"><td class="cellrowborder" valign="top" width="18%" headers="mcps1.2.3.1.1 "><p id="p382391145710"><a name="p382391145710"></a><a name="p382391145710"></a><ul>Function Types</ul></p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.3.1.2 "><a name="ul334485413318"></a><a name="ul334485413318"></a><ul id="ul334485413318"><li>Support automatic conversion of synchronous functions with return values and callback types in TS language to C++ types [Note: synchronous callback type specifically refers to the export interface Callback<T> defined in the template: {
    (data: T): void;
}]</li><li>Support automatic conversion of asynchronous functions with callback and promise types in TS language to C++ types [Note: asynchronous callback type specifically refers to the export interface AsyncCallback<T> defined in the template: {
    (err: BusinessError, data: T): void;
}]</li><li>Support automatic conversion of static functions in namespace domain of TS interface files to corresponding C++ functions</li><li>Support automatic conversion of functions starting with $ in namespace domain of TS interface files to corresponding C++ automatic functions</li><li>Support on registration and off unregistration functions in namespace domain of TS interface files [Note: on/off event types support string generic values or string fixed values, callback functions support AsyncCallback, Callback templates]</li><li>Support conversion of arrow functions in namespace domain of TS interface files to corresponding C++ functions</li></ul>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1.3 ">
<ul id="ult940244418002">
<li>
<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_callback">callback test case</a>
</li>
<li>
<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_promise">promise test case</a>
</li>
<li>
<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_static">static test case</a>
</li>
<li>
<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_$">$ test case</a>
</li>
<li>
<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_on">on/off test case</a>
</li>
<li>
<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_class">arrow func test case</a>
</li>
</ul>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.4 "><p id="p2142111345716"><a name="p2142111345716"></a><a name="p2142111345716"></a><ul>V1.2</ul></p>
</td>
</tr>
<tr id="row834358143319"><td class="cellrowborder" valign="top" width="18%" headers="mcps1.2.3.1.1 "><p id="p1818191195713"><a name="p1818191195713"></a><a name="p1818191195713"></a><ul>interface</ul></p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.3.1.2 "><a name="ul4367144411512"></a><a name="ul4367144411512"></a><ul id="ul4367144411512"><li>Support automatic conversion of variables and functions in interface domain of TS language to C++ types</li><li>Support C++ implementation for interface inheriting class declarations in TS interface files</li><li>Support C++ implementation for interface inheriting interface declarations in TS interface files</li></ul>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1.3 ">
<ul id="ult940244418003">
<li>
<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_interface">interface test case</a>
</li>
<li>
<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_extends">extends test case</a>
</li>
</ul>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.4 "><p id="p2142111345717"><a name="p2142111345717"></a><a name="p2142111345717"></a><ul>V1.2</ul></p>
</td>
</tr>
<tr id="row119944512385"><td class="cellrowborder" valign="top" width="18%" headers="mcps1.2.3.1.1 "><p id="p919862210573"><a name="p919862210573"></a><a name="p919862210573"></a><ul>namespace</ul></p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.3.1.2 "><a name="ul12374158862"></a><a name="ul12374158862"></a><ul id="ul12374158862"><li>Support automatic conversion of variables, functions, interfaces in namespace domain of TS language to C++ types</li><li>Support conversion of namespace domain class in TS interface files to C++ class</li><li>Support conversion of namespace domain class inheritance in TS interface files to C++ inherited class</li> </ul>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1.3 ">
<ul id="ult940244418004">
<li>
<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_namespace">namespace test case</a>
</li>
</ul>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.4 "><p id="p2142111345718"><a name="p2142111345718"></a><a name="p2142111345718"></a><ul>V1.2</ul></p>
</td>
</tr>
<tr id="row18711154213388"><td class="cellrowborder" valign="top" width="18%" headers="mcps1.2.3.1.1 " rowspan="2"><p id="p111921822185713"><a name="p111921822185713"></a><a name="p111921822185713"></a><ul>Files</ul></p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.3.1.2 "><a name="ul94024441879"></a><a name="ul94024441879"></a><ul id="ul94024441879"><li>Support conversion of namespace data types in TS files to C++ types</li><li>Support conversion of TS interface files with naming format ohos.A.B.C.d.ts</li><li>Support command-line conversion with multiple file paths separated by English commas</li><li>Support command-line conversion with folder path</li><li>Support import of custom files in TS files</li></ul>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1.3 ">
<ul id="ult940244418005">
<li>
<a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_import">import test case</a>
</li>
</ul>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.4 "><p id="p2142111345718"><a name="p2142111345718"></a><a name="p2142111345718"></a><ul>V1.2</ul></p>
</td>
</tr>
<tr id="row18711154213389">
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.3.1.2 "><a name="ul94024441880"></a><a name="ul94024441880"></a><ul id="ul94024441880"><li>IntelliJ plugin on DevEco Studio supports files with naming format ohos.A.B.C.d.ts</li><li>VSCode plugin supports files with naming format ohos.A.B.C.d.ts</li><li>Command-line mode supports converting multiple files simultaneously, separated by English commas</li><li>Command-line mode supports folder conversion</li></ul>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1.3 ">
No test cases for plugin interface adaptation yet
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.4 "><p id="p2142111345719"><a name="p2142111345719"></a><a name="p2142111345719"></a><ul>V1.3</ul></p>
</td>
</tr>
<tr id="row119944512386"><td class="cellrowborder" valign="top" width="18%" headers="mcps1.2.3.1.1 "><p id="p919862210574"><a name="p919862210574"></a><a name="p919862210574"></a><ul>Reliability</ul></p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.3.1.2 "><a name="ul12374158863"></a><a name="ul12374158863"></a><ul id="ul12374158863"><li>Rectify generated code standards</li> </ul>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1.3 ">
No test cases for code standards yet
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.4 "><p id="p2142111345720"><a name="p2142111345720"></a><a name="p2142111345720"></a><ul>V1.3</ul></p>
</td>
</tr>
</tbody>
</table>

**Table 2** 

[Features to be developed](https://gitee.com/openharmony/napi_generator/blob/master/docs/ROADMAP_ZH.md)