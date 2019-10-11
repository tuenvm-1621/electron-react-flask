import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import bookReducer from '../reducers/book'
import rootSaga from '../saga'

const reducers = combineReducers({
  bookReducer
})

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)