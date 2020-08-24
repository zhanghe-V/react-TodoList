import React from 'react';
import { connect } from 'react-redux';
import {
  inputChangeAction,
  addItemAction,
  deleteItemAction
} from './store/actionCreators';

const TodoList = (props) => {
  const { inputValue, list, handleInput, handleSubmit, handleDelete } = props
  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
        />
        <button onClick={handleSubmit}>提交</button>
      </div>
      <ul>
        <li>zhangh</li>
        {
          list.map((item, index) => {
            return (
              <li key={index} onClick={() => handleDelete(index)}>{ item }</li>
            )
          })
        } 
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInput(e) {
      const action = inputChangeAction(e.target.value)
      dispatch(action)
    },
    handleSubmit() {
      const action = addItemAction()
      dispatch(action)
    },
    handleDelete(index) {
      const aciton = deleteItemAction(index)
      dispatch(aciton)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)