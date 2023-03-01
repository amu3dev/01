import React, { useState } from "react";
import "../../css/ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  // const [enteredTitle, setEnteredTitle] = useState(""); // useState returns an array with 2 elements
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  // const handleTitleChange = (event) => { // handle the change of the input field and update the state 1 by 1
  //   //console.log(event.target.value.length);
  //   setEnteredTitle(event.target.value);
  //   //console.log(enteredTitle);
  // };
  // const handleAmountChange = (event) => {
  //   setEnteredAmount(event.target.value);
  //   //console.log(enteredAmount);
  // };
  // const handleDateChange = (event) => {
  //   setEnteredDate(event.target.value);
  //   //console.log(enteredDate);
  // };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const expenseData = {
  //     title: enteredTitle,
  //     amount: enteredAmount,
  //     date: new Date(enteredDate),
  //   };
  //   onSaveExpenseData(expenseData);
  //   //console.log(expenseData);
  //   setEnteredTitle("");
  //   setEnteredAmount("");
  //   setEnteredDate("");
  // };

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const handleTitleChange = (event) => {
    //console.log(event.target.value.length);

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const handleAmountChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const handleDateChange = (event) => {
    setUserInput((prevState) => {
      // prevState is the previous state snapshot before the update
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    onSaveExpenseData(expenseData); // pass the data to the parent component

    // console.log("ExpenseForm component");
    // console.log(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={userInput.enteredDate}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
