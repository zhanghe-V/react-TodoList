import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import  './sytle.css'

class TodoList extends Component {

  constructor (props) {
    // 当组件的 state 或 props 发生改变的时候，render 函数就会重新执行
    // 当父组件的 render 函数执行时，他的子组件的render 都将被重新运行
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange=  this.handleInputChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this)
    this.handleItemDelete=  this.handleItemDelete.bind(this)
  }

  componentWillMount() {
    // 当页面即将被挂载到页面的时刻执行
    console.log('componentWillMount')
  }

  render () {
      console.log('render')
      return (
        <Fragment>
          <div>
            <label htmlFor="input">输入内容</label>
            <input
              id="input"
              className="input"
              value={ this.state.inputValue }
              onChange={ this.handleInputChange }
            />
            <button onClick={ this.handleSubmit }>提交</button>
          </div>
          <ul>
            {
              this.getTodoTtem()
            }
          </ul>
        </Fragment>
      )
  }
  
  componentDidMount() {
    // 页面被挂载到页面之后，自动被执行
    console.log('componentDidMount')
  }

  componentWillReceiveProps() { // 不推荐使用
    // 当一个组件从父组件接收参数 
    // 如果这个组件第一次存在父组件中，不会执行
    // 如果这个组件已经存在父组件中，才会执行
    console.log('componentWillRecieveProps');
  }

  shouldComponentUpdate() {
    // 组件被更新之前，会被自动执行
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUpdate() {
    // 组件被更新之前，他会被自动执行，他在shouldComponentUpdate之后执行
    // 如果 shouldComponentUpdate 返回true 他才会执行，返回false 不会执行
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    // 组件更新完成之后被执行
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    // 组件即将被从页面中剔除时执行
    console.log('componentWillUnmount')
  }

  getTodoTtem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={ index }
          content={ item }
          index={ index }
          deleteItem={ this.handleItemDelete }
        />
      )
    })
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleSubmit() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }
}

export default TodoList

/* 
JSX中细节

html: dangerouslySetInnerHTML
for标签: htmlFor

*/
/* 
react的特征
声明式开发(声明数据, 页面自己生成, jq 命名式开发)
组件化
单项数据流
视图层框架
函数值编程
*/