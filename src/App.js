import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import uuid from "uuid/v4";

const initialIncome = [];

const initialExpenses = [];

function App() {
  const [income, setIncome] = useState(initialIncome);

  const [expenses, setExpenses] = useState(initialExpenses);
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
    console.log(inputDesc, amount);
    if (inputDesc !== "" && amount > 0) {
      if (option === "inc") {
        const incomeItem = {
          id: uuid(),
          description: inputDesc,
          Amount: amount
        };
        setIncome([...income, incomeItem]);
      } else {
        const expenseItem = {
          id: uuid(),
          description: inputDesc,
          Amount: amount
        };
        setExpenses([...expenses, expenseItem]);
      }
    } else {
      // Alert for correction
    }
  };
  const handleSelection = e => {
    setOption(e.target.value);
  };

  console.log(option);
  console.log(income, expenses);

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
        <List expenses={expenses} income={income} />
      </section>
      <Footer />
    </div>
  );
}

export default App;
