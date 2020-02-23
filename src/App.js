import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";

const Expenses = [
  { id: 1, description: "Rent", Amount: 2400 },
  { id: 2, description: "Phone Bills", Amount: 125 },
  { id: 2, description: "Grocery", Amount: 321 }
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="Fields">
        <Form />
        <List />
      </section>
      <Footer />
    </div>
  );
}

export default App;
