import React from "react";
import "./Header.scss";
import { ReactComponent as Inc } from "./icons/Inc.svg";
import { ReactComponent as Exp } from "./icons/Exp.svg";
import { ReactComponent as Budget } from "./icons/Budget.svg";

const Header = ({ totalExp, totalInc }) => {
  const displayMonth = function() {
    const pres = new Date();
    const year = pres.getFullYear();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const month = pres.getMonth();
    const dateToday = months[month] + " " + year;

    return dateToday;
  };

  return (
    <div>
      <h1 className="title">
            <span className="deco">Available </span>budget in <span className="budget__title--month">{displayMonth()}</span>
      </h1>
      <header className="display">
        <div className="budget">
          <div className="budget__available">
            <div className="budget__available__container">
              <div className="budget__available__container__text">Available</div>
              <Budget className="budget__available__container__icon" />
            </div>

            <div className="budget__available--value">
              {totalInc.reduce((acc, curr) => {
                return (acc += curr.Amount);
              }, 0) -
                totalExp.reduce((acc, curr) => {
                  return (acc += curr.Amount);
                }, 0)}
            </div>
          </div>

          <div className="budget__income">
            <div className="budget__income__container">
              <div className="budget__income__container__text">Income</div>
              <Inc className="budget__income__container__icon" />
            </div>
            <div className="budget__income--value">
              +{" "}
              {totalInc.reduce((acc, curr) => {
                return (acc += parseInt(curr.Amount));
              }, 0)}
            </div>
          </div>

          <div className="budget__expenses">
            <div className="budget__expenses__container">
              <div className="budget__expenses__container__text">Expenses</div>
              <Exp className="budget__expenses__container__icon" />
            </div>
            <div className="budget__expenses--value">
              -{" "}
              {totalExp.reduce((acc, curr) => {
                return (acc += parseInt(curr.Amount));
              }, 0)}
            </div>
            <div className="budget__expenses--percentage"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
