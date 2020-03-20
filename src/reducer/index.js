import { combineReducers } from "redux";
import counterReducer      from "./counter";
import usersReducer        from "./users";
import tasksReducer        from './tasks';

export default combineReducers( {
  counterStore: counterReducer,
  usersStore: usersReducer,
  taskStore: tasksReducer,
} );