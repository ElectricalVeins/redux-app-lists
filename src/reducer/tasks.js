import ACTION_TYPE from "../actions/actionTypes";

const initialState = {
  isFetching: true,
  tasks: [],
  error: null,
};

export default function tasksReducer( state = initialState, action ) {
  switch ( action.type ) {
    case ACTION_TYPE.GET_TASKS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case ACTION_TYPE.GET_TASKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        tasks: action.tasks
      };
    case ACTION_TYPE.GET_TASKS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }


}