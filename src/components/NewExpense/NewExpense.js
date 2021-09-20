import React ,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import ToggleButton from "./ToggleButton";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formState, toggleFormState] = useState(false);
  //Function to handle passing up of expense data
  const expenseSubmitHandler = (expenseObj) => {
    let newExpenseObj;
    newExpenseObj = {
      id: Math.random(),
      ...expenseObj
    }
    changeFormState();
    props.expenseGrabber(newExpenseObj);
  };


  const changeFormState = () =>{
    return formState ? toggleFormState(false) : toggleFormState(true);
  }

  // if(formState == false){
  //   return(
  //     <ToggleButton onClick={changeFormState}/>
  //   )
  // }

  return (
      <div className="new-expense">
      {!formState && <ToggleButton onClick={changeFormState}/>}
      {formState && <ExpenseForm onExpenseSubmit={expenseSubmitHandler} onCancel={changeFormState} />}
      </div>
  );
};

export default NewExpense;
