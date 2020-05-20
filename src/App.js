import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import uuid from "uuid/v4";

function App() {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [inputDesc, setInputDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [option, setOption] = useState("inc");
  const handleDesc = e => {
    setInputDesc(e.target.value);
  };
  const handleAmount = e => {
    setAmount(parseInt(e.target.value));
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (inputDesc !== "" && amount > 0) {
      if (option === "inc") {
        const incomeItem = {
          id: uuid(),
          description: inputDesc,
          Amount: amount
        };
        setIncome([...income, incomeItem]);
        setInputDesc("");
        setAmount("");
      } else {
        const expenseItem = {
          id: uuid(),
          description: inputDesc,
          Amount: amount
        };
        setExpenses([...expenses, expenseItem]);
        setInputDesc("");
        setAmount("");
      }
    } else {
      // Alert for correction
    }
  };
  const handleSelection = e => {
    setOption(e.target.value);
  };

  const handleDeletingInc = id => {
    let filteredInc = income.filter(item => item.id !== id);
    setIncome(filteredInc);
  };
  const handleDeletingExp = id => {
    let filteredExp = expenses.filter(item => item.id !== id);
    setExpenses(filteredExp);
  };

  return (
    <div className="App">
      <Header totalExp={expenses} totalInc={income} />
      <section className="Fields">
        <Form
          description={inputDesc}
          amount={amount}
          handleDesc={handleDesc}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          handleSelection={handleSelection}
        />
        <List
          expenses={expenses}
          income={income}
          handleDeletingInc={handleDeletingInc}
          handleDeletingExp={handleDeletingExp}
        />
      </section>
      <Footer />
    </div>
  );
}

export default App;
