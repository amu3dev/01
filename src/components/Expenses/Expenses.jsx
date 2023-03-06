import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";

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
      <ExpensesList filteredYear={filteredYear} expenses={expenses} />
    </Card>
  );
};
export default Expenses;
