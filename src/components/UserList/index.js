import React, { useEffect } from "react";
import { connect } from 'react-redux';
import ACTION_TYPE from "../../actions/actionTypes";

const UserList = ( props ) => {
  const { isFetching, users, error, getUsersRequest, getUsersResponse, getUsersError } = props;

  useEffect( () => {
    getUsersRequest();
    fetch( 'http://localhost:5000/api/admin/users' )
      .then( res => res.json() )
      .then( data => getUsersResponse( data ) )
      .catch( e => getUsersError( e ) )
  }, [] );

  if( error ) {
    return <h1>ERR</h1>
  }

  if( isFetching ) {
    return <h1>LOADING</h1>
  }

  return (
    <ul>
      {
        users.map( ( item ) => ( <li key={item.id}>{item.firstName}</li> ) )
      }
    </ul>
  )
};

const mapStateToProps = state => {

  return state.usersStore
};
const mapDispatchToProps = dispatch => {
  return {
    getUsersRequest: () => dispatch( {
      type: ACTION_TYPE.GET_TASKS_REQUEST
    } ),
    getUsersResponse: ( users ) => dispatch( {
      type: ACTION_TYPE.GET_USERS_RESPONSE,
      users,
    } ),
    getUsersError: ( error ) => dispatch( {
      type: ACTION_TYPE.GET_USERS_ERROR,
      error,
    } )
  }
}


export default connect( mapStateToProps, mapDispatchToProps )( UserList )