import { createStore, applyMiddleware } from 'redux';
import reducer                          from './../reducer';
import ACTION_TYPE                      from "../actions/actionTypes";
import rootSaga                         from "../sagas";
import createSagaMiddleware             from 'redux-saga';


const sagaMW = createSagaMiddleware();
const store = createStore( reducer, applyMiddleware( sagaMW ) )
sagaMW.run( rootSaga )


export default store