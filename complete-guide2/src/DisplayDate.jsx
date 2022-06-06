import React from "react";
import './DisplayDate.css'
export function DisplayDate(props) {
  const year = props.date.getFullYear();
  const day = props.date.getDay();
  const month = props.date.getMonth();

  return (
    <>
      <div className="expense-date">
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    </>
  );
}
