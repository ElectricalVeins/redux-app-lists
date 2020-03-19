import ACTION_TYPE from "../actions/actionTypes";

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};


const usersReducer = ( prevState = initialState, action ) => {
  switch ( action.type ) {

    case ACTION_TYPE.GET_USERS_REQUEST:
      return {
        ...prevState,
        isFetching: true,
      };
    case ACTION_TYPE.GET_USERS_RESPONSE:
      return {
        ...prevState,
        isFetching: false,
        users: [ ...prevState.users, ...action.users ]
      };
    case ACTION_TYPE.GET_USERS_ERROR:
      return {
        ...prevState,
        isFetching: false,
        error: action.error
      };

    default:
      return prevState;
  }
};


export default usersReducer;