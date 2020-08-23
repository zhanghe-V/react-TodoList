import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ITEM,
  GET_INIT_LIST
} from './actionType'

export const getInputChangeAction = (value) => (
  {
    type: CHANGE_INPUT_VALUE,
    value
  }
)

export const getAddItemAction = () => (
  {
    type: ADD_TODO_ITEM
  }
)

export const getDeleteItemAction = (index) => (
  {
    type: DELETE_TODO_ITEM,
    index
  }
)

export const getListItemAction = (data) => (
  {
    type: INIT_LIST_ITEM,
    data
  }
)

// export const getTodoList = () => { // 采用redux-thunk 中间件
//   return (dispatch) => {
//     setTimeout(() => {
//       console.log(['aaa', 'fff', 'eee']);
//       const action = getListItemAction(['aaa', 'fff', 'eee'])
//       dispatch(action)
//     }, 2000)
//   }
// }

export const getInitList = () => (
  {
    type: GET_INIT_LIST
  }
)