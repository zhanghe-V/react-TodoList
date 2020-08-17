## react 简书

react性能优化：
- 组件中事件改变作用域（.bind(this)）放在constoustor 中统一进行
- setState 内置，将多次连续set 集中到一次进行
- 虚拟dom diff算法 同级比对 key值比对 提高页面速度
- 借助shouldComponentUpdate钩子判断是否渲染