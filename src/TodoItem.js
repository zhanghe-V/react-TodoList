import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { content, test } = this.props
    return (
      <div
        onClick={ this.handleClick }
      >
        { test } - { content }
      </div>
    )
  }

  componentWillReceiveProps() { // 不推荐使用
    // 当一个组件从父组件接收参数 
    // 如果这个组件第一次存在父组件中，不会执行
    // 如果这个组件已经存在父组件中，才会执行
    console.log('child componentWillRecieveProps');
  }

  shouldComponentUpdate(nextProps, nextState) { // 做性能优化
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  componentWillUnmount() {
    // 组件即将被从页面中剔除时执行
    console.log('child componentWillUnmount')
  }

  handleClick () {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

TodoItem.propTypes = {  // 限制组件props的类型
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]) // number 或者 string
}

TodoItem.defaultProps = {
  test: 'hello'
}

export default TodoItem