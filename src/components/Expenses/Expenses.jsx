import React from "react";

import { getExpenses } from "../../services/FakeExpenses";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./expenses.css";
const expenses = getExpenses();

const Expenses = () => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
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
