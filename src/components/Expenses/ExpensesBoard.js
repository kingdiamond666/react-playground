import React, {useState} from 'react';
import ExpenseFilter from "../Filters/ExpenseFilter"
import Card from "../UI/Card";
import "./ExpensesBoard.css";
import ExpensesList from "./ExpensesList";

function ExpensesBoard(props) {
  //Filter Component State Management
  const [selectedOption, setOption] = useState('2020');
  const gettingData = (arg) => {
    setOption(arg);
  }
  let filterdArr = props.data.filter(item => item.date.getFullYear().toString() === selectedOption)
console.log(filterdArr);
  return (

    <Card className="expenses">
      {/*Filter Component*/}
      <ExpenseFilter selected={selectedOption} onGettingData={gettingData}/>

      {/*filtered Mapped*/}
      <ExpensesList data={filterdArr}/>
    </Card>

  );
}

export default ExpensesBoard;
