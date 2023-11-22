# napi_generator-1.4（2023-11-30）

## 版本概述<a name="section249611124916"></a>

发布napi_generator-1.4。

## 版本特性<a name="section249611124917"></a>
**表 1**  已支持特性

<a name="table143385853320"></a>

<table><thead align="left"><tr id="row53375863312"><th class="cellrowborder" valign="top" width="18%" id="mcps1.2.3.1.1"><p id="p20331858193317"><a name="p20331858193317"></a><a name="p20331858193317"></a><ul>类别</ul></p>
</th>
<th class="cellrowborder" valign="top" width="70%" id="mcps1.2.3.1.2"><p id="p1133115820331"><a name="p1133115820331"></a><a name="p1133115820331"></a><ul>支持特性</ul></p>
</th>
<th class="cellrowborder" valign="top" width="12%" id="mcps1.2.3.1.3"><p id="p1133115820332"><a name="p1133115820332"></a><a name="p1133115820332"></a><ul>版本号</ul></p>
</th>
</tr>
</thead>
<tbody><tr id="row333115812331"><td class="cellrowborder" valign="top" width="18%" headers="mcps1.2.3.1.1 "><p id="p2142111345714"><a name="p2142111345714"></a><a name="p2142111345714"></a><ul>变量/返回值</ul></p>
</td>
<td class="cellrowborder" valign="top" width="70%" headers="mcps1.2.3.1.2 "><a name="ul9264132010"></a><a name="ul9264132010"></a><ul id="ul9264132010"><li>支持ts语言中type复合类型的变量/函数入参自动转换为C++类型</li><li>支持interface/type成员变量为基本类型时，成员变量为可选的,如：
interface Test {
    aa: string;
    bb?: boolean;
}</li></ul>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.3 "><p id="p2142111345715"><a name="p2142111345715"></a><a name="p2142111345715"></a><ul>V1.4</ul></p>
</td>
</tr>
<tr id="row334175803317"><td class="cellrowborder" valign="top" width="18%" headers="mcps1.2.3.1.1 "><p id="p382391145710"><a name="p382391145710"></a><a name="p382391145710"></a><ul>函数类型</ul></p>
</td>
<td class="cellrowborder" valign="top" width="70%" headers="mcps1.2.3.1.2 "><a name="ul334485413318"></a><a name="ul334485413318"></a><ul id="ul334485413318"><li>支持ts接口文件中namespace域中的registerXXX注册、unRegisterXXX去注册函数</li><li>支持ts语言中callback、promise类型的异步函数自动转换为C++类型</li><li>支持ts接口文件中namespace域中的addXXX注册、removeXXX去注册、onXXX定义回调的函数</li><li>支持on注册类型为固定值,注册回调为箭头函数：如function on(type: 'onEvents', callback: (wid: number) => void): void; </li><li>支持文件中定义多个on注册函数</li><li>支持callback方法为箭头函数：如function fun1(cb: (wid: boolean) => string): string;</li><li>支持callback方法为Function关键字：如function fun2(tt: Function): void;</li><li>支持Promise类型是匿名interface的函数</li></ul>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.3 "><p id="p2142111345716"><a name="p2142111345716"></a><a name="p2142111345716"></a><ul>V1.4</ul></p>
</td>
</tr>
<tr id="row834358143319"><td class="cellrowborder" valign="top" width="18%" headers="mcps1.2.3.1.1 "><p id="p1818191195713"><a name="p1818191195713"></a><a name="p1818191195713"></a><ul>interface</ul></p>
</td>
<td class="cellrowborder" valign="top" width="70%" headers="mcps1.2.3.1.2 "><a name="ul4367144411512"></a><a name="ul4367144411512"></a><ul id="ul4367144411512"><li>支持class/interface成员方法不声明返回值</li><li>支持后定义的class或interface被前面类引用</li></ul>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.3 "><p id="p2142111345717"><a name="p2142111345717"></a><a name="p2142111345717"></a><ul>V1.4</ul></p>
</td>
</tr>
<tr id="row119944512385"><td class="cellrowborder" valign="top" width="18%" headers="mcps1.2.3.1.1 "><p id="p919862210573"><a name="p919862210573"></a><a name="p919862210573"></a><ul>namespace</ul></p>
</td>
<td class="cellrowborder" valign="top" width="70%" headers="mcps1.2.3.1.2 "><a name="ul12374158862"></a><a name="ul12374158862"></a><ul id="ul12374158862"><li>支持enum定义在interface后面</li><li>支持namespace域中的interface/type/class/enum兼容大括号换行</li></ul>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.3 "><p id="p2142111345718"><a name="p2142111345718"></a><a name="p2142111345718"></a><ul>V1.4</ul></p>
</td>
</tr>
<tr id="row18711154213388"><td class="cellrowborder" valign="top" width="18%" headers="mcps1.2.3.1.1 " rowspan="2"><p id="p111921822185713"><a name="p111921822185713"></a><a name="p111921822185713"></a><ul>文件</ul></p>
</td>
<td class="cellrowborder" valign="top" width="70%" headers="mcps1.2.3.1.2 "><a name="ul94024441879"></a><a name="ul94024441879"></a><ul id="ul94024441879"><li>支持命令行方式ts接口文件转换时业务代码可配置</li></ul>
</td>
<td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.3.1.3 "><p id="p2142111345718"><a name="p2142111345718"></a><a name="p2142111345718"></a><ul>V1.4</ul></p>
</td>
</tr>
</tbody>
</table>



**表 2** 

[待开发特性](https://gitee.com/openharmony/napi_generator/blob/master/docs/ROADMAP_ZH.md)

