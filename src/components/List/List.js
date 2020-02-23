import React from "react";
import "./List.scss";
import IncomeItem from "../Item/IncomeItem";
import ExpenseItem from "../Item/ExpenseItem";


const List = () => {
  return (
    <div class="container">
      <div class="income">
        <h2 class="income__title">Income</h2>
        <IncomeItem />
        <div class="income__list"></div>
      </div>

      <div class="expenses">
        <h2 class="expenses__title">Expenses</h2>
        <ExpenseItem />
        <div class="expenses__list"></div>
      </div>
    </div>
  );
};

export default List;
