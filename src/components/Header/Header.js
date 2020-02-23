import React from "react";
import "./Header.scss";
import { ReactComponent as Inc } from "./icons/Inc.svg";
import { ReactComponent as Exp } from "./icons/Exp.svg";
import { ReactComponent as Budget } from "./icons/Budget.svg";

const Header = () => {
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
    <header className="display">
      <div className="budget">
        <div className="budget__title">
          <span className="deco">Available</span>
          <br />
          Budget
          <br />
          in <span className="budget__title--month">{displayMonth()}</span>
        </div>

        <div className="budget__available">
          <div className="budget__available__container">
            <div className="budget__available__container__text">Available</div>
            <Budget className="budget__available__container__icon" />
          </div>

          <div className="budget__available--value">0</div>
        </div>

        <div className="budget__income">
          <div className="budget__income__container">
            <div className="budget__income__container__text">Income</div>
            <Inc className="budget__income__container__icon" />
          </div>
          <div className="budget__income--value">0</div>
        </div>

        <div className="budget__expenses">
          <div className="budget__expenses__container">
          <div className="budget__expenses__container__text">Expenses</div>
          <Exp className="budget__expenses__container__icon" />
          </div>
          <div className="budget__expenses--value">0</div>
          <div className="budget__expenses--percentage"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
