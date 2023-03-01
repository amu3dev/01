import React from "react";
import "../../css/Card.css";

const Card = (props) => {
  const classes = props.className;
  // console.log(classes);
  return <div className={"u3_card " + classes}>{props.children}</div>;
};

export default Card;
