import React from "react";
import { ReactComponent as Delete } from "./icons/delete.svg";
import "./IncomeItem.scss";

const IncomeItem = () => {
  return (
    <div class="item" id="">
      <div class="item__description">Description</div>

      <div class="item__value">+ 2400</div>
      <div class="item__delete">
        <button class="item__delete--btn">
          <Delete className="item__delete--btn__icon" />
        </button>
      </div>
    </div>
  );
};

export default IncomeItem;
