import React from "react"; // { useState }
import ExpenseDate from "./ExpenseDate";
import "../../css/ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const { amount, date, title } = props;
  // const [title, setTitle] = useState(props.title);
  // const handelClick = () => {
  //   setTitle("Item updated!");
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        {/* <button onClick={handelClick}>Update</button> */}
      </div>
    </Card>
  );
};

export default ExpenseItem;
