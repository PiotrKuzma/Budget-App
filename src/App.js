import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import uuid from "uuid/v4";

function App() {
  const initialIncome = [
    { id: uuid(), description: "Salary", Amount: 7500 },
    { id: uuid(), description: "Website Project", Amount: 2410 },
    { id: uuid(), description: "Netting", Amount: 350 }
  ];
  const [income, setIncome] = useState(initialIncome);

  const initialExpenses = [
    { id: uuid(), description: "Rent", Amount: 2400 },
    { id: uuid(), description: "Phone Bills", Amount: 125 },
    { id: uuid(), description: "Grocery", Amount: 600 }
  ];

  const [expenses, setExpenses] = useState(initialExpenses);


  return (
    <div className="App">
      <Header totalExp={expenses} totalInc={income} />
      <section className="Fields">
        <Form />
        <List expenses={expenses} income={income}/>
      </section>
      <Footer />
    </div>
  );
}

export default App;
