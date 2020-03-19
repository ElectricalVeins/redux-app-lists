import ACTION_TYPE from "./actionTypes";

export const incrementCounter = () => {
  return {
    type: ACTION_TYPE.INCREMENT,
  }
};

export const decrementCounter = () => {
  return {
    type: ACTION_TYPE.DECREMENT,
  }
}