import { put }     from 'redux-saga/effects';
import ACTION_TYPE from "../actions/actionTypes";

export function* getTasksSaga( action ) {
  try {
    const tasks = yield fetch();
    yield put( {
      type: ACTION_TYPE.GET_TASKS_SUCCESS,
      tasks: tasks,
    } )
  } catch ( e ) {
    yield put( {
      type: ACTION_TYPE.GET_TASKS_ERROR,
      error: e
    } )
  }
}