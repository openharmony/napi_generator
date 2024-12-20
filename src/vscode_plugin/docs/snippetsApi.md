# Snippets

**Napi snippets**

<table><thead align="center"><tr><th class="cellrowborder" valign="top" width="12%" ><ul>版本号</ul></th>
<th class="cellrowborder" valign="top" width="25%"><ul>场景</ul></th>
<th class="cellrowborder" valign="top" width="18%"><ul>命令</ul></th>
<th class="cellrowborder" valign="top" width="45%"><ul>描述</ul></th>
</tr>
</thead>
<tbody>
  <tr>
    <td class="cellrowborder" valign="top" width="12%" rowspan="34">1.0.0</td>
    <td class="cellrowborder" valign="top" width="25%">类</td>
    <td class="cellrowborder" valign="top" width="18%">napiclass</td>
    <td class="cellrowborder" valign="top" width="45%">napi类使用场景代码片段</td>
  </tr>
  <tr>
    <td>结构体</td>
    <td>napistruct</td>
    <td>napi结构体使用场景代码片段</td>
  </tr>
  <tr>
    <td>线程安全</td>
    <td>napiasyncthreadsafefunc</td>
    <td>napi线程安全使用场景代码片段</td>
  </tr>
  <tr>
    <td>枚举</td>
    <td>napienum</td>
    <td>napi枚举使用场景代码片段</td>
  </tr>
  <tr>
    <td rowspan="5">异步工作</td>
    <td>napiasyncwork</td>
    <td>napi异步工作使用场景代码片段</td>
  </tr>
  <tr>
    <td>napicallfunc</td>
    <td>napi回调代码片段,结合napiasyncwork使用</td>
  </tr>
  <tr>
    <td>napicreatepromise</td>
    <td>napi创建promise代码片段,结合napiasyncwork使用</td>
  </tr>
  <tr>
    <td>napiresolvedeferred</td>
    <td>接受napicreatepromise创建的promise值代码片段</td>
  </tr>
  <tr>
    <td>napirejectdeferred</td>
    <td>拒绝napicreatepromise创建的promise值代码片段</td>
  </tr>
  <tr>
    <td rowspan="23">输入输出</td>
    <td>napidoublein</td>
    <td>napi输入double类型数据代码片段</td>
  </tr>
  <tr>
    <td>napiint32in</td>
    <td>napi输入int32_t类型数据代码片段</td>
  </tr>
  <tr>
    <td>napiuint32in</td>
    <td>napi输入uint32_t类型数据代码片段</td>
  </tr>
  <tr>
    <td>napiint64in</td>
    <td>napi输入int64_t类型数据代码片段</td>
  </tr>
  <tr>
    <td>napiboolin</td>
    <td>napi输入bool类型数据代码片段</td>
  </tr>
  <tr>
    <td>napistringutf8in</td>
    <td>napi输入string utf8类型数据代码片段</td>
  </tr>
  <tr>
    <td>napistringutf16in</td>
    <td>napi输入string utf16类型数据代码片段</td>
  </tr>
  <tr>
    <td>napiisarray</td>
    <td>napi判断输入数据是否是array代码片段</td>
  </tr>
  <tr>
    <td>napiarrayin</td>
    <td>napi输入array类型数据代码片段</td>
  </tr>
  <tr>
    <td>napiarrayout</td>
    <td>napi输出array类型数据代码片段</td>
  </tr>
  <tr>
    <td>napidoubleout</td>
    <td>napi输出double类型数据代码片段</td>
  </tr>
  <tr>
    <td>napiint32out</td>
    <td>napi输出int32_t类型数据代码片段</td>
  </tr>
  <tr>
    <td>napiuint32out</td>
    <td>napi输出uint32_t类型数据代码片段</td>
  </tr>
  <tr>
    <td>napiint64out</td>
    <td>napi输出int64_t类型数据代码片段</td>
  </tr>
  <tr>
    <td>napiboolout</td>
    <td>napi输出bool类型数据代码片段</td>
  </tr>
  <tr>
    <td>napistringutf8out</td>
    <td>napi输出string utf8类型数据代码片段</td>
  </tr>
  <tr>
    <td>napistringutf16out</td>
    <td>napi输出string utf16类型数据代码片段</td>
  </tr>
  <tr>
    <td>napistructrefin</td>
    <td>napi输入struct引用代码片段</td>
  </tr>
  <tr>
    <td>napistructrefout</td>
    <td>napi输出struct引用代码片段</td>
  </tr>
  <tr>
    <td>napiclassrefin</td>
    <td>napi输入class引用代码片段</td>
  </tr>
  <tr>
    <td>napiclassrefout</td>
    <td>napi输出class引用代码片段</td>
  </tr>
  <tr>
    <td>napiarrayrefin</td>
    <td>napi输入array引用代码片段</td>
  </tr>
  <tr>
    <td>napiarrayrefout</td>
    <td>napi输出array引用代码片段</td>
  </tr>
  <tr>
    <td rowspan="2">错误处理</td>
    <td>napigetlasterrorinfo</td>
    <td>获取最后一次napi调用失败相关的错误信息代码片段</td>
  </tr>
  <tr>
    <td>napithrowerror</td>
    <td>napi抛出JS错误对象代码片段</td>
  </tr>
</tbody>
</table>

**Aki snippets**

<table><thead align="center"><tr><th class="cellrowborder" valign="top" width="12%" ><ul>版本号</ul></th>
<th class="cellrowborder" valign="top" width="25%"><ul>场景</ul></th>
<th class="cellrowborder" valign="top" width="18%"><ul>命令</ul></th>
<th class="cellrowborder" valign="top" width="45%"><ul>描述</ul></th>
</tr>
</thead>
<tbody>
  <tr>
    <td class="cellrowborder" valign="top" width="12%" rowspan="5">1.0.0</td>
    <td class="cellrowborder" valign="top" width="25%">类</td>
    <td class="cellrowborder" valign="top" width="18%">akiclass</td>
    <td class="cellrowborder" valign="top" width="45%">aki 类使用场景代码片段</td>
  </tr>
  <tr>
    <td>结构体</td>
    <td>akistruct</td>
    <td>aki 结构体使用场景代码片段</td>
  </tr>
  <tr>
    <td>枚举</td>
    <td>akienum</td>
    <td>aki 枚举使用场景代码片段</td>
  </tr>
  <tr>
    <td>同步方法</td>
    <td>akisyncfunc</td>
    <td>aki同步方法使用场景代码片段</td>
  </tr>
  <tr>
    <td>异步方法</td>
    <td>akiasyncfunc</td>
    <td>aki异步方法使用场景代码片段</td>
  </tr>
</tbody>
</table>