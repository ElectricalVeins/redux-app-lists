import { put } from 'redux-saga/effects';
import ACTION_TYPE   from "../actions/actionTypes";

export function* getUsersSaga() {

  try {

    const users = yield fetch( 'http://localhost:5000/api/admin/users' ).then( res => res.json() )
    yield put( {
      type: ACTION_TYPE.GET_USERS_SUCCESS,
      users
    } )

  } catch ( e ) {
    yield put( {
      type: ACTION_TYPE.GET_USERS_ERROR,
      error: e
    } )
  }
}

export function * postUserSaga() {
try{}catch ( e ) {
  
}
}