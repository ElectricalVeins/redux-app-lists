import { takeLatest }   from 'redux-saga/effects';
import ACTION_TYPE      from "../actions/actionTypes";
import { getUsersSaga } from "./usersSaga";
import { getTasksSaga } from "./tasksSaga";

export default function* rootSaga() {
  yield takeLatest( ACTION_TYPE.GET_USERS_REQUEST, getUsersSaga );
  yield takeLatest( ACTION_TYPE.GET_TASKS_REQUEST, getTasksSaga );
}

