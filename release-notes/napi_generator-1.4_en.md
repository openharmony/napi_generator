# napi_generator-1.4

## Version Overview<a name="section249611124916"></a>

Release napi_generator-1.4.

## Version Features<a name="section249611124917"></a>
**Table 1**  Supported Features

[Currently known unsupported recommended solutions](https://gitee.com/openharmony/napi_generator/blob/master/docs/SOLUTION.md)

<a name="table143385853321"></a>

<table><thead align="left"><tr id="row53375863312"><th class="cellrowborder" valign="top" width="18%" id="mcps1.2.3.1.1"><p id="p20331858193317"><a name="p20331858193317"></a><a name="p20331858193317"></a><ul>Category</ul></p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p1133115820331"><a name="p1133115820331"></a><a name="p1133115820331"></a><ul>Supported Features</ul></p>
</th>
<th class="cellrowborder" valign="top" width="20%" id="mcps1.2.3.1.3"><p id="p1133115820331"><a name="p1133115820333"></a><a name="p1133115820333"></a><ul>Test Cases</ul></p>
</th>
<th class="cellrowborder" valign="top" width="12%" id="mcps1.2.3.1.4"><p id="p1133115820332"><a name="p1133115820332"></a><a name="p1133115820332"></a><ul>Version</ul></p>
</th>
</tr>
</thead>
<tbody><tr id="row333115812331"><td class="cellrowborder" valign="top" width="18%" headers="mcps1.2.3.1.1 "><p id="p2142111345714"><a name="p2142111345714"></a><a name="p2142111345714"></a><ul>Variables/Return Values</ul></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><a name="ul9264132010"></a><a name="ul9264132010"></a><ul id="ul9264132010"><li>Support automatic conversion of type composite type variables/function parameters in TS language to C++ types [Note: type source scope is basic types (string/number/boolean)/map/array/enum]</li><li>Support optional member variables when interface/type member variables are basic types (string/number/boolean), e.g.:
interface Test {
    v1: string;
    v2?: boolean;
}</li></ul>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.3.1.3 ">
<ul id="ult940244418001">
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_type">type test case</a>
</li>
</ul>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.4 "><p id="p2142111345715"><a name="p2142111345715"></a><a name="p2142111345715"></a><ul>V1.4</ul></p>
</td>
</tr>
<tr id="row334175803317"><td class="cellrowborder" valign="top" width="18%" headers="mcps1.2.3.1.1 "><p id="p382391145710"><a name="p382391145710"></a><a name="p382391145710"></a><ul>Function Types</ul></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><a name="ul334485413318"></a><a name="ul334485413318"></a><ul id="ul334485413318"><li>Support registerXXX registration and unRegisterXXX unregistration functions in namespace domain of TS interface files [Note: 1. Use register to indicate that the current callback is only registered, and the business decides the trigger timing, distinguishing from the scenario where the callback is triggered in the current function; 2. Current registered callbacks support single parameter only, not multiple parameters. Callback forms: 1) registerCallbackfunc(cb : (wid: number) => string); 2) fun17(tt: Function): string; Function type is treated as ()=>void; 3. All callback methods default to synchronous]</li><li>Support addXXX registration, removeXXX unregistration, onXXX callback definition functions in namespace domain of TS interface files [Note: 1. Use add to indicate that the current function is a registration function, and the parameter is an interface class; 2. Current registered callbacks support single parameter only, not multiple parameters; Supported type notation: addSayHelloListener(listener: NodeISayHelloListener); 3. Registered object callback functions do not support arrow function notation, only support notation like onSayHelloStart(info1: SayInfo, info2: string);]</li><li>Support on registration with fixed value type and arrow function callback: e.g. function on(type: 'onEvents', callback: (wid: number) => void): void;</li><li>Support multiple on registration functions defined in a file</li><li>Support callback methods as arrow functions: e.g. function fun1(cb: (wid: boolean) => string): string;</li><li>Support callback methods with Function keyword: e.g. function fun2(tt: Function): void;</li><li>Support Promise types with anonymous interface. e.g.: sayHi(from: string): Promise<{result: number, errMsg: string, response: string}>;</li></ul>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.3.1.3 ">
<ul id="ult940244418001">
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_on">on/off test case</a>
</li>
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_callback">callback test case</a>
</li>
</ul>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.4 "><p id="p2142111345716"><a name="p2142111345716"></a><a name="p2142111345716"></a><ul>V1.4</ul></p>
</td>
</tr>
<tr id="row834358143319"><td class="cellrowborder" valign="top" width="18%" headers="mcps1.2.3.1.1 "><p id="p1818191195713"><a name="p1818191195713"></a><a name="p1818191195713"></a><ul>interface</ul></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><a name="ul4367144411512"></a><a name="ul4367144411512"></a><ul id="ul4367144411512"><li>Support class/interface member methods without declared return value, defaulting to void</li><li>Support later-defined class or interface being referenced by earlier classes</li></ul>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.3.1.3 ">
<ul id="ult940244418001">
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_class">class test case</a>
</li>
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_interface">interface test case</a>
</li>
</ul>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.4 "><p id="p2142111345717"><a name="p2142111345717"></a><a name="p2142111345717"></a><ul>V1.4</ul></p>
</td>
</tr>
<tr id="row119944512385"><td class="cellrowborder" valign="top" width="18%" headers="mcps1.2.3.1.1 "><p id="p919862210573"><a name="p919862210573"></a><a name="p919862210573"></a><ul>namespace</ul></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><a name="ul12374158862"></a><a name="ul12374158862"></a><ul id="ul12374158862"><li>Support enum defined after interface</li><li>Support interface/type/class/enum in namespace domain with brace line break compatibility</li></ul>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.3.1.3 ">
<ul id="ult940244418001">
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_enum">enum test case</a>
</li>
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_interface">interface test case</a>
</li>
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_class">class test case</a>
</li>
</li>
<li><a href="https://gitee.com/openharmony/napi_generator/tree/master/test/storytest/test_type">type test case</a>
</li>
</ul>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.4 "><p id="p2142111345718"><a name="p2142111345718"></a><a name="p2142111345718"></a><ul>V1.4</ul></p>
</td>
</tr>
<tr id="row18711154213388"><td class="cellrowborder" valign="top" width="18%" headers="mcps1.2.3.1.1 " rowspan="2"><p id="p111921822185713"><a name="p111921822185713"></a><a name="p111921822185713"></a><ul>Files</ul></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><a name="ul94024441879"></a><a name="ul94024441879"></a><ul id="ul94024441879"><li>Support configurable business code for command-line TS interface file conversion</li></ul>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.2.3.1.3 ">
One-click NAPI implementation code generation, currently only supports command-line entry. DevEco Studio entry and VSCode entry are not yet supported.
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.4 "><p id="p2142111345718"><a name="p2142111345718"></a><a name="p2142111345718"></a><ul>V1.4</ul></p>
</td>
</tr>
</tbody>
</table>

**Table 2** 

[Features to be developed](https://gitee.com/openharmony/napi_generator/blob/master/docs/ROADMAP_ZH.md)