import React from "react";
import "./List.scss";
import IncomeItem from "../Item/IncomeItem";
import ExpenseItem from "../Item/ExpenseItem";


const List = () => {
  return (
    <div className="container">
      <div className="income">
        <h2 className="income__title">Income</h2>
        <IncomeItem />
        <div className="income__list"></div>
      </div>

      <div className="expenses">
        <h2 className="expenses__title">Expenses</h2>
        <ExpenseItem />
        <div className="expenses__list"></div>
      </div>
    </div>
  );
};

export default List;
