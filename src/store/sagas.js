import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionType';
import { getListItemAction } from './actionCreators';

// generator 函数 ES6
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

function* getInitList() {
  const action = getListItemAction(['aaa', 'fff', 'eee'])
  yield put(action)
}

export default mySaga