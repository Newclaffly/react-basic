import React from "react";
import Transaction from "./components/Transaction";
import "./App.css";
import FormComponent from "./components/FormComponent";
import { useState } from "react";
function App() {
  // const initData = [
  //   { id: 1, title: "Submarine", amount: 2000 },
  //   { id: 2, title: "Bus", amount: 3000 },
  //   { id: 3, title: "Car", amount: 4000 },
  //   { id: 4, title: "Van", amount: 5000 },
  //   { id: 5, title: "Air-plane", amount: 6000 },
  //   { id: 6, title: "Boat", amount: 7000 },
  // ];
  const [items, setItem] = useState([]);
  const onAddNewItem = (newItem) => {
    setItem((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  return (
    <>
      <div className="container">
        <h1>Income and Expenses basic-app</h1>
        <FormComponent onAddItem={onAddNewItem} />
        <Transaction items={items} />
      </div>
    </>
  );
}

export default App;
