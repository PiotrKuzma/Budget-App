import React from "react";
import "./List.scss";
import IncomeItem from "../Item/IncomeItem";
import ExpenseItem from "../Item/ExpenseItem";

const List = ({ expenses, income, handleDeletingInc, handleDeletingExp }) => {
  return (
    <div className="container">
      <div className="income">
        <h2 className="income__title">Income</h2>

        <ul className="income__list">
          {income.map(income => {
            return (
              <IncomeItem
                key={income.id}
                income={income}
                handleDeletingInc={handleDeletingInc}
              />
            );
          })}
        </ul>
      </div>

      <div className="expenses">
        <h2 className="expenses__title">Expenses</h2>

        <ul className="expenses__list">
          {expenses.map(expense => {
            return (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                handleDeletingExp={handleDeletingExp}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default List;
