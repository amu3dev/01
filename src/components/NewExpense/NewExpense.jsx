import React, { useState } from "react";
import "../../css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onSaveExpenseData }) => {
  const [expenseFormAppearance, setExpenseFormAppearance] = useState(false);
  const HandleExpenseAppear = () => {
    setExpenseFormAppearance(false);
  };

  return (
    <div className="new-expense">
      {expenseFormAppearance && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          onExpenseAppear={HandleExpenseAppear}
        />
      )}
      {!expenseFormAppearance && (
        <button
          onClick={() => {
            setExpenseFormAppearance(true);
          }}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
