import React from "react";
import "./card.css";

const Card = (props) => {
  const classes = props.className;
  console.log(classes);
  return <div className={"card " + classes}>{props.children}</div>;
};

export default Card;
