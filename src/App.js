import React from 'react'
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpenses} from './components/incomeExpenses'
import {AddTransaction} from './components/addTransaction'
// import {Transaction} from './components/transaction'
import {Transactionlist} from './components/transactionlist'
import {GlobalProvider} from './Context/GlobalState'
import  './App.css';

function App() {
  return (
    <GlobalProvider>
    <div className='head'><Header /></div>
    <div className='container'>
      
      <Balance/>
      <IncomeExpenses/>
      <Transactionlist/>
      <AddTransaction/>
      </div>
      </GlobalProvider>
      
   
  )
}

export default App

