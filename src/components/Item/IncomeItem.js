import React from "react";
import { ReactComponent as Delete } from "./icons/delete.svg";
import "./IncomeItem.scss";

const IncomeItem = ({ income, handleDeletingInc }) => {
  const { id, description, Amount } = income;
  return (
    <li className="item" id={id}>
      <div className="item__description">{description}</div>

      <div className="item__value">+ {Amount}</div>
      <div className="item__delete">
        <button
          className="item__delete--btn"
          onClick={() => handleDeletingInc(id)}
        >
          <Delete className="item__delete--btn__icon" />
        </button>
      </div>
    </li>
  );
};

export default IncomeItem;
