import React from "react";
import "./Header.scss";

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

        <div className="budget__value">0</div>

        <div className="budget__income">
          <div className="budget__income--text">Income</div>

          <div className="budget__income--value">0</div>
          <div className="budget__income--percentage">&nbsp;</div>
        </div>

        <div className="budget__expenses">
          <div className="budget__expenses--text">Expenses</div>

          <div className="budget__expenses--value">0</div>
          <div className="budget__expenses--percentage"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
