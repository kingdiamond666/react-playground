import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  // Capturing props State with useState
  const [title, setEnteredTitle] = useState("");
  const [amount, setEnteredAmount] = useState("");
  const [date, setEnteredDate] = useState("");

  // Event Handler Functions
  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const eventData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };


    console.log(eventData)
    //reminder: this function is declared in one component up (NewExpense.js)
    // then it is fired on this component with data on this level.
    //This is how you pass data up from component to component
    props.onExpenseSubmit(eventData);
    setEnteredDate("");
    setEnteredAmount("");
    setEnteredTitle("");
  };

  const onCancelHandler = (e) => {
    props.onCancel();
    setEnteredDate("");
    setEnteredAmount("");
    setEnteredTitle("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="expense-form__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={date}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="reset" onClick={onCancelHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
