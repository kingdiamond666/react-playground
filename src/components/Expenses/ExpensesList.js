import './ExpensesList.css'
import React from 'react';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) =>{

   if(props.data.length === 0) {
       return <h1 className="expenses-list__fallback">No Expenses Found</h1>;
   }
    return (
        <ul className='expenses-list'>
            {props.data.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    )
}




export default ExpensesList;