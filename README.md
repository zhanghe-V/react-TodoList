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

## redux中间件：
- 中间指的是 `action` 和 `store` 之间, 对 `diapatch` 方法进行封装升级完成一定功能。

> redux-thunk 采用的思想是 把异步操作放在 action 里面去操作
> 而 redux-saga 把异步操作拆分出来 放在单独的文件中去管理

++ redux-thunk 中间件： 它使得我们可以在 action 中写异步(actionCreator 可以返回函数，否则只能返回对象。)
1. 安装 `npm i redux-thunk -S`
2. 使用 用`enhancer`方式使用

++ redux-saga 中间件：
1. 安装 `npm i redux-saga -S`
2. 创建sagas文件在里面完成逻辑

## react-redux:
* 核心API：
- 1. Provider 连接store, 内部组件都可以获取到store中内容
- 2. connect 组件和store做连接
- 3. 