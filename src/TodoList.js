import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input } from 'antd'
import { Button } from 'antd';

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <Input placeholder="输入" style={{width: '300px', marginRight: '10px'}} />
          <Button type="primary">提交</Button>
        </div>
      </div>
    )
  }
}

export default TodoList