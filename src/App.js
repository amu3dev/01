//import ExpenseItem from "./components/ExpenseItem";
//import Incrementer from "./components/Example/Incrementer";
import { useState } from "react";
import { getExpenses } from "../src/services/FakeExpenses";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const savedExpenses = localStorage.getItem("expenses") || null;

  const expensesItems = savedExpenses
    ? JSON.parse(savedExpenses)
    : getExpenses();
  // const expensesItems = getExpenses();

  expensesItems.map((item) => {
    return (item.date = new Date(item.date));
  });
  const [expenses, setExpenses] = useState(expensesItems);

  const handelSaveExpenseData = (newAddedExpense) => {
    //console.log(newExpense);
    const newExpenseData = {
      ...newAddedExpense,
      id: Math.random().toString(),
    };

    setExpenses((prevExpenses) => {
      localStorage.setItem(
        "expenses",
        JSON.stringify([newExpenseData, ...prevExpenses])
      );
      return [newExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onSaveExpenseData={handelSaveExpenseData} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
