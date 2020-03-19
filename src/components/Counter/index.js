import React                                  from 'react';
import { connect }                            from 'react-redux';
import { decrementCounter, incrementCounter } from "../../actions/actionCreators";

const Counter = ( props ) => {

  const { value, increment, decrement } = props;

  return (
    <>
      <h1>
        {
          value
        }
      </h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
};

const mapStateToProps = ( state ) => {

  return state.counterStore
};

const mapDispatchToProps = ( dispatch ) => {

  return {
    increment: () => dispatch( incrementCounter() ),
    decrement: () => dispatch( decrementCounter() ),
  };

};

export default connect( mapStateToProps, mapDispatchToProps )( Counter );