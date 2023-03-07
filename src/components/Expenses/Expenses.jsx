import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "../../css/Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("");

  const handelYearChange = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        onYearChange={handelYearChange}
        selectedYear={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList
        filteredYear={filteredYear}
        filteredExpenses={filteredExpenses}
        expenses={expenses}
      />
    </Card>
  );
};
export default Expenses;
