## react 简书

react性能优化：
- 组件中事件改变作用域（.bind(this)）放在constoustor 中统一进行
- setState 内置，将多次连续set 集中到一次进行
- 虚拟dom diff算法 同级比对 key值比对 提高页面速度
- 借助shouldComponentUpdate钩子判断是否渲染


### 纯函数：给固定的输入，就一定会有固定的输入，而且不会有任何副作用(副作用指对参数做了修改)。

>> 函数中有 date ， ajax，settimeout 相关，就不是纯函数。

## Redux 中核心API：

- createStore
- store.dispatch
- store.getState
- store.subscribe

## 普通组件可以拆分成 UI组件和容器组件
## 无状态组件（函数式）
- 性能较高，原因：普通组件继承Component，其中有生命周期函数和render，远比无状态组件多

