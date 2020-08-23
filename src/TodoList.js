import React, { Component } from 'react'
import 'antd/dist/antd.css'
import TodoListUI from './TodoListUI';
import store from './store'
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  // getTodoList
  getInitList
} from './store/actionCreators'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return ( 
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        handleDelete={this.handleDelete}
      />
    )
  }

  componentDidMount() {
    // setTimeout(() => {
    //   const action = getListItemAction(['aaa', 'fff', 'eee'])
    //   store.dispatch(action)
    // }, 2000)

    // const action = getTodoList() // redux-thunk
    
    const action = getInitList()
    store.dispatch(action)
  }

  handleInput(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleSubmit() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(() => store.getState())
  }

  handleDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList