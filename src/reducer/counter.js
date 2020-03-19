import ACTION_TYPE from '../actions/actionTypes';

const initialState = {
  value: 0,
  step: 1,
};

const counterReducer = ( state = initialState, action ) => {

  switch ( action.type ) {
    case ACTION_TYPE.INCREMENT:
      return {
        ...state,
        value: state.value + state.step,
      };
    case ACTION_TYPE.DECREMENT:
      return {
        ...state,
        value: state.value - state.step,
      };
    default:
      return state;
  }
};

export default counterReducer;