import React, {useState, useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

const [text, setText] = useState('');
const [amount, setAmount] = useState();

const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }




  return (
    <>
      <h3><center>Add new transaction</center></h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text"><b>Description</b></label>
          <input type="text" value={text} required="required" onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            ><b>Amount <br />
            ( '-' expense, '+' income)</b></label
          >
          <input type="number" value={amount} required="required" onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}