import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

import "../../css/Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("");
  //const [expenses, setExpenses] = useState(props.expenses);

  const handelYearChange = (year) => {
    setFilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        onYearChange={handelYearChange}
        selectedYear={filteredYear}
      />

      {!filteredYear &&
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

      {filteredYear &&
        expenses
          .filter((expense) => {
            return expense.date.getFullYear().toString() === filteredYear;
          })
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
    </Card>
  );
};
export default Expenses;
