# ArkUI CAPI XTS 八类路由（摘要）

完整规则与模板见下载后的 **`arkui-capi-xts-generator-v3/SKILL.md`**
（[上游目录](https://gitcode.com/qq_44921954/arkUISkill/tree/master/arkui_capi_xts_generator-v3)）。

**生成用例前必须先完成分类**，再决定是否有页面、用哪套 native 库。

## 关键词速查

| API 模式 | 类别 | 页面 | Native 库 |
|----------|------|------|-----------|
| `*_Create` / `*_Dispose` | 1 纯 API | 无 | libnativefunc |
| `*_Set*` / `*_Get*`（非 Event） | 2 属性 | 通常无 | libnativefunc |
| UI 事件 / `ClonedPointerEvent` | 3 事件回调 | 有 | libnativerender |
| `GestureEvent_*` | 4 手势事件 | 有 | libnativerender |
| `GetGestureParam_*` | 4.1 手势参数 | 有 | libnativerender |
| 动画相关 | 5 动画 | 有 | libnativerender |
| `Dialog_*` | 6 对话框 | 无 | libnativefunc |
| `NodeComponent_*` | 7 Component | 无 | libnativefunc |
| `DragEvent_*` | 8 拖拽 | 有 | libnativerender |

## 易错 Event 对象

| Event 类型 | Set/Get | 类别 | 页面 |
|------------|---------|------|------|
| `CoastingAxisEvent` | Set/Get | **2** | 无（可模拟对象） |
| `PointerEvent` | Set/Get | **2** | 无 |
| `ClonedPointerEvent` | Set/Get | **3** | 有 |
| `DragEvent` | Set/Get | **8** | 有 |
| `GestureEvent` | Get | **4** | 有 |

## 结论

- **无页面**（1、2、6、7 及多数 2 类 Event）→ **`libnativefunc.so`** + `NapiFuncInitTest.cpp`
- **有页面**（3、4、4.1、5、8）→ **`libnativerender.so`** + 页面 `.ets` + `NapiRenderInitTest.cpp`

样例目录：`category1_nodemanagement/` … `category7_component/`（生成器仓内）。
