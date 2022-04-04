import React from 'react';
import ListContext from './list-context';
import { useReducer } from 'react';

const defaultListState={
    list:[],
}

const listReducer=(state,action)=>{
     if(action.type==="ADD"){
         const updatedList=state.list.concat(action.list);
          return{
              list:updatedList
          }
        }
      
    return defaultListState;
}

export default function ListProvider(props) {
    const [listState,dispatchListAction]=useReducer(listReducer,defaultListState);
    
  const addHandler=list=>{
       dispatchListAction({type:'ADD',list:list});
  }
  const removeHandler=id=>{
    dispatchListAction({type:'REMOVE',id:id});
  }

    const listContext={
        list:listState.list,
        addList:addHandler,
        removeList:removeHandler
        
    }
  return (
    <ListContext.Provider  value={listContext}>
        {props.children}
    </ListContext.Provider>
  )
}
