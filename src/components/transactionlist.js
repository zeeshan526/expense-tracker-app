import React, {useContext} from 'react';
import {Transaction} from './transaction'

import {GlobalContext} from '../Context/GlobalState';

export const Transactionlist = () => {
          
   const {transaction}= useContext(GlobalContext)

   


    return (
        <>
           <h3><center>Transaction History</center></h3> 
           <ul className ="list">

              {transaction.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))}

           </ul>
        </>
    )
}