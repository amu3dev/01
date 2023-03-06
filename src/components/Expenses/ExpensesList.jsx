import React from "react";
import ExpenseItem from "./ExpenseItem";

import "../../css/ExpensesList.css";

const ExpensesList = ({ filteredYear, expenses }) => {
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="expenses-list">
      {!filteredYear &&
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      {filteredYear && filteredExpenses.length === 0 ? (
        <p className="expenses-list__fallback">
          No expenses found for the selected year.
        </p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
};

export default ExpensesList;
