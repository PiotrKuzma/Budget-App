import React from "react";
import './App.scss'
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Item from "./components/Item/Item";

function App() {
  return (
    <div className="App">
      <Header/>
      <Form />
      <List />
      <Item />
    </div>
  );
}

export default App;
