import React, { useState } from "react";
import "./expenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleTitleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.value.length);

    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
  };
  const handleAmountChange = (event) => {
    console.log(event.target.value);
    setEnteredAmount(event.target.value);
    console.log(enteredAmount);
  };
  const handleDateChange = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
    console.log(enteredDate);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={enteredDate}
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
