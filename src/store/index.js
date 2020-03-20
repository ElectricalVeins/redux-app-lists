import { createStore, applyMiddleware } from 'redux';
import reducer                          from './../reducer';

function log( store ) {

  return function ( next ) {

    return function ( action ) {
      console.log( 'dispatching', action );
      let result = next( action );
      console.log( 'next state', store.getState() );
      return result
    }
  }

}

const middleware = applyMiddleware( log );

export default createStore( reducer, middleware );