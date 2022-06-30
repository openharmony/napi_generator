# napi_generator-1.0（2022-03-30）

## 版本概述<a name="section249611124916"></a>

首次发布napi_generator-1.0。

## 版本特性<a name="section249611124917"></a>
**表 1**  已支持特性

<a name="table143385853320"></a>
<table><thead align="left"><tr id="row53375863312"><th class="cellrowborder" valign="top" width="25.77%" id="mcps1.2.3.1.1"><p id="p20331858193317"><a name="p20331858193317"></a><a name="p20331858193317"></a>类别</p>
</th>
<th class="cellrowborder" valign="top" width="74.22999999999999%" id="mcps1.2.3.1.2"><p id="p1133115820331"><a name="p1133115820331"></a><a name="p1133115820331"></a>支持特性</p>
</th>
</tr>
</thead>
<tbody><tr id="row333115812331"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.3.1.1 "><p id="p2142111345714"><a name="p2142111345714"></a><a name="p2142111345714"></a>变量</p>
</td>
<td class="cellrowborder" valign="top" width="74.22999999999999%" headers="mcps1.2.3.1.2 "><a name="ul9264132010"></a><a name="ul9264132010"></a><ul id="ul9264132010"><li>支持ts语言中string、number、boolean基础类型的变量/函数入参自动转换为C++类型</li><li>支持ts语言中interface复合类型的变量/函数入参自动转换为C++类型</li><li>支持ts语言中enum复合类型变量/函数入参自动转换为C++类型</li><li>支持ts语言中string、number、boolean、enum、interface数组类型的变量/函数入参自动转换为C++类型，且数组书写方式可以为array<>或[]两种</li><li>支持ts语言中string、number、boolean、array、map、interface的map类型的变量/函数入参自动转换为C++类型，且map书写方式可以为{[key:string]:any}或Map<>两种</li></ul>
</td>
</tr>
<tr id="row15331058133314"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.3.1.1 "><p id="p056093211916"><a name="p056093211916"></a><a name="p056093211916"></a>函数返回值</p>
</td>
<td class="cellrowborder" valign="top" width="74.22999999999999%" headers="mcps1.2.3.1.2 "><a name="ul166113311811"></a><a name="ul166113311811"></a><ul id="ul166113311811"><li>支持ts语言中void、string、number、boolean、interface的函数返回值自动转换为C++类型</li><li>支持ts语言中string、number、interface、boolean、enum数组类型的函数返回值自动转换为C++类型，且数组书写方式可以为array<>或[]两种</li><li>支持ts语言中enum（string、number）类型的函数返回值自动转换为C++类型</li></ul>
</td>
</tr>
<tr id="row334175803317"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.3.1.1 "><p id="p382391145710"><a name="p382391145710"></a><a name="p382391145710"></a>函数类型</p>
</td>
<td class="cellrowborder" valign="top" width="74.22999999999999%" headers="mcps1.2.3.1.2 "><a name="ul334485413318"></a><a name="ul334485413318"></a><ul id="ul334485413318"><li>支持ts语言中返回值、callback类型的同步函数自动转换为C++类型</li><li>支持ts语言中callback、promise类型的异步函数自动转换为C++类型</li><li>支持ts接口文件中namespace域的static函数自动转换为对应C++的函数</li><li>支持ts接口文件中namespace域的以$开头的函数自动转换为对应C++的自动函数</li></ul>
</td>
</tr>
<tr id="row834358143319"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.3.1.1 "><p id="p1818191195713"><a name="p1818191195713"></a><a name="p1818191195713"></a>interface</p>
</td>
<td class="cellrowborder" valign="top" width="74.22999999999999%" headers="mcps1.2.3.1.2 "><a name="ul4367144411512"></a><a name="ul4367144411512"></a><ul id="ul4367144411512"><li>支持ts语言中interface域的变量、函数自动转换为C++类型</li></ul>
</td>
</tr>
<tr id="row119944512385"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.3.1.1 "><p id="p919862210573"><a name="p919862210573"></a><a name="p919862210573"></a>namespace</p>
</td>
<td class="cellrowborder" valign="top" width="74.22999999999999%" headers="mcps1.2.3.1.2 "><a name="ul12374158862"></a><a name="ul12374158862"></a><ul id="ul12374158862"><li>支持ts语言中namespace域的变量、函数、interface自动转换为C++类型</li></ul>
</td>
</tr>
<tr id="row18711154213388"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.3.1.1 "><p id="p111921822185713"><a name="p111921822185713"></a><a name="p111921822185713"></a>文件</p>
</td>
<td class="cellrowborder" valign="top" width="74.22999999999999%" headers="mcps1.2.3.1.2 "><a name="ul94024441879"></a><a name="ul94024441879"></a><ul id="ul94024441879"><li>支持ts文件中namespace数据类型转换为C++类型</li><li>支持ts接口文件名格式如下ohos.A.B.C.d.ts的文件转换</li><li>命令行方式转换时支持多个文件路径，相互之间用英文逗号分开</li><li>命令行方式转换时支持指定路径下的ts文件转换</li></ul>
</td>
</tr>
</tbody>
</table>

**表 2** 

[待开发特性](https://gitee.com/openharmony/napi_generator/blob/master/docs/ROADMAP_ZH.md)

