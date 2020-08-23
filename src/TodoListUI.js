import React from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  return (
    <div>
      <div>
        <Input
          placeholder="输入"
          style={{width: '300px', margin: '10px'}}
          value={props.inputValue}
          onChange={props.handleInput} />
        <Button type="primary" onClick={props.handleSubmit}>提交</Button>
      </div>
      <List
        style={{marginTop: '10px', marginLeft: '10px', width: '300px'}}
        bordered
        dataSource={props.list}
        renderItem={
          (item, index) => (<List.Item onClick={() => {props.handleDelete(index)}}>{item}</List.Item>)
        }
      ></List>
    </div>
  )
}

export default TodoListUI