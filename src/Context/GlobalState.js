import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//initil state
const initialstate={

    transaction:[

    ]
}
 
//create context
export const GlobalContext= createContext(initialstate);
//provider component
export const GlobalProvider =({children})=>{
    const [state, dispatch]= useReducer (AppReducer, initialstate)

      // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }



    return(<GlobalContext.Provider value={{

        transaction: state.transaction,
        deleteTransaction,
    addTransaction
    }}>

        {children}
    </GlobalContext.Provider>);

}