import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return ( 
      <div>
        <div>
          <Input
            placeholder="输入"
            style={{width: '300px', margin: '10px'}}
            value={this.state.inputValue}
            onChange={this.handleInput} />
          <Button type="primary" onClick={this.handleSubmit}>提交</Button>
        </div>
        <List
          style={{marginTop: '10px', marginLeft: '10px', width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        ></List>
      </div>
    )
  }

  handleInput(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }

  handleSubmit() {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(() => store.getState())
  }
}

export default TodoList