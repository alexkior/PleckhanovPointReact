import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/root.reducer.js';
import { initialState } from './state'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/root.saga.js';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;
