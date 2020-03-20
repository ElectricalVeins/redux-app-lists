import React, { useEffect } from 'react';
import { connect }          from 'react-redux'
import ACTION_TYPE          from "../../actions/actionTypes";

const TaskList = ( props ) => {

  useEffect( () => {
    props.getTasks()
  }, [] );

  const { isFetching, tasks, error } = props;

  if(error ){
    return <div>error.message</div>
  }
  if(isFetching){
    return <div>Loading</div>
  }

  return (
    <ul>
      {
        tasks.map(item=>{
          return <li key={item.id}>{`Task id = ${item.id}`}</li>
        })
      }
    </ul>
  );
};

function mapStateToProps( state ) {
  return state.taskStore;
}

function mapDispatchToProps( dispatch ) {
  return {
    getTasks: () => dispatch( {
      type: ACTION_TYPE.GET_TASKS_REQUEST
    } )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( TaskList );