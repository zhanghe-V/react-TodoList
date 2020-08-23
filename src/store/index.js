import { createStore, applyMiddleware, compose  } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
    
const enhancer = composeEnhancers(
  // applyMiddleware(thunk),
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);

const store = createStore(
  reducer,
  enhancer
);

sagaMiddleware.run(sagas)

export default store;
 