# NAPI框架代码生成工具

## 版本规划

2022.9.30提供1.2版本 基本完善工具C++支持能力，2022.9.30前完成迭代并提交代码，具体特性见表1。

**表 1**  2022.9.30待支持特性

<a name="table143385853320"></a>
<table><thead align="left"><tr id="row53375863312"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.3.1.1"><p id="p20331858193317"><a name="p20331858193317"></a><a name="p20331858193317"></a>类别</p>
</th>
<th class="cellrowborder" valign="top" width="45%" id="mcps1.2.3.1.2"><p id="p1133115820331"><a name="p1133115820331"></a><a name="p1133115820331"></a>待开发特性</p>
</th>
</tr>
</thead>
<tbody><tr id="row333115812331"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.3.1.1 "><p id="p2142111345714"><a name="p2142111345714"></a><a name="p2142111345714"></a>变量</p>
</td>
<td class="cellrowborder" valign="top" width="45%" headers="mcps1.2.3.1.2 "><a name="ul9264132010"></a><a name="ul9264132010"></a><ul id="ul9264132010"><li>支持ts接口文件中namespace域的any类型变量转换为对应C++类型变量 NAPI 实现、interface</li><li>支持ts接口文件中namespace域的函数入参一部分指定参数值，一部分定义参数类型变量</li><li>支持ts接口文件中namespace域的实例化object变量 转换为对应C++ class类实例变量</li><li>支持ts接口文件中namespace域的可选变量 转换为对应多种场景的C++ 变量，生成多个重载变量</li><li>支持ts接口文件中namespace域的多中类型合并成新类型的变量转换为对应C++类型变量</li></ul>
</td>
</tr>
<tr id="row15331058133314"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.3.1.1 "><p id="p056093211916"><a name="p056093211916"></a><a name="p056093211916"></a>函数返回值</p>
</td>
<td class="cellrowborder" valign="top" width="74.22999999999999%" headers="mcps1.2.3.1.2 "><a name="ul166113311811"></a><a name="ul166113311811"></a><ul id="ul166113311811"><li>接口函数返回值支持any类型转换为对应C++类型返回值</li></ul>
</td>
</tr>
<tr id="row334175803317"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.3.1.1 "><p id="p382391145710"><a name="p382391145710"></a><a name="p382391145710"></a>函数</p>
</td>
<td class="cellrowborder" valign="top" width="74.22999999999999%" headers="mcps1.2.3.1.2 "><a name="ul334485413318"></a><a name="ul334485413318"></a><ul id="ul334485413318"><li>支持ts接口文件中namespace域interface中带参数的new函数</li><li>支持ts接口文件中namespace域interface域支持函数类型，根据函数类型变量转换为C++函数</li></ul>
</td>
</tr>
<tr id="row834358143319"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.3.1.1 "><p id="p1818191195713"><a name="p1818191195713"></a><a name="p1818191195713"></a>interface</p>
</td>
<td class="cellrowborder" valign="top" width="74.22999999999999%" headers="mcps1.2.3.1.2 "><a name="ul4367144411512"></a><a name="ul4367144411512"></a><ul id="ul4367144411512"><li>支持ts接口文件中interface继承类方式的声明 对应的C++实现</li><li>支持ts接口文件中interface继承interface方式的声明对应的C++实现</li></ul>
</td>
</tr>
<tr id="row119944512385"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.3.1.1 "><p id="p919862210573"><a name="p919862210573"></a><a name="p919862210573"></a>namespace</p>
</td>
<td class="cellrowborder" valign="top" width="74.22999999999999%" headers="mcps1.2.3.1.2 "><a name="ul12374158862"></a><a name="ul12374158862"></a><ul id="ul12374158862"><li>支持ts接口文件中namespace域类转换为C++的类</li><li>支持ts接口文件中namespace域类继承转换为C++中继承的类</li></ul>
</td>
</tr>
</tbody>
</table>

## 相关链接

无
