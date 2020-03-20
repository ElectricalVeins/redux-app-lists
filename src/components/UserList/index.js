import React, { useEffect } from "react";
import { connect }          from 'react-redux';
import ACTION_TYPE          from "../../actions/actionTypes";

const UserList = ( props ) => {
  const {
    isFetching,
    users,
    error,
    getUsersRequest,
  } = props;

  useEffect( () => {
      getUsersRequest();
    }
  );

  if( error ) {
    return <h1>ERR</h1>
  }

  if( isFetching ) {
    return <h1>LOADING</h1>
  }

  return (
    <ul>
      {
        users.map( ( item ) => ( <li key={item.id}>{`${item.firstName} ${item.lastName}`}</li> ) )
      }
    </ul>
  )
};

const mapStateToProps = state => {
  return state.usersStore
};
const mapDispatchToProps = ( dispatch ) => {

    return {
      getUsersRequest: () => dispatch( {
        type: ACTION_TYPE.GET_TASKS_REQUEST
      } )
    }

  }
;


export default connect( mapStateToProps, mapDispatchToProps )( UserList )