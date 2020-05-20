import React from "react";
import { ReactComponent as Delete } from "./icons/delete.svg";
import "./ExpenseItem.scss";

const ExpenseItem = ({ expense, handleDeletingExp }) => {
  const { id, description, Amount } = expense;
  return (
    <li className="item" id={id}>
      <div className="item__description">{description}</div>
      <div className="item__value">- {Amount}</div>
      <div className="item__delete">
        <button
          className="item__delete--btn"
          onClick={() => handleDeletingExp(id)}
        >
          <Delete className="item__delete--btn__icon"/>
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
