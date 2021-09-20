import "./ExpenseItem.css";
import "../Filters/ExpenseFilter"
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {


  // NOTE: I like this syntax with grouping the item i'm throwing useState on
  // along with the callback function that is executing it. seems to be clean.
  // const [date, setDate] = useState(props.date);
  // const dateHandler = () => {
  //   let today = new Date();
  //   setDate(today);
  // };
  return (
      <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card></li>
  );
}

export default ExpenseItem;
