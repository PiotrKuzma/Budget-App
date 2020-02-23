import React from "react";
import { ReactComponent as Delete } from "./icons/delete.svg";
import "./IncomeItem.scss";

const IncomeItem = () => {
  return (
    <div className="item" id="">
      <div className="item__description">Description</div>

      <div className="item__value">+ 2400</div>
      <div className="item__delete">
        <button className="item__delete--btn">
          <Delete className="item__delete--btn__icon" />
        </button>
      </div>
    </div>
  );
};

export default IncomeItem;
