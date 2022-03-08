import React, { useEffect } from "react";
import Transaction from "./components/Transaction";
import "./App.css";
import FormComponent from "./components/FormComponent";
import { useState } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";

function App() {
  // const initState = [
  //   { id: 1, title: "Submarine", amount: -2000 },
  //   { id: 2, title: "Bus", amount: 3000 },
  //   { id: 3, title: "Car", amount: 4000 },
  //   { id: 4, title: "Van", amount: 5000 },
  //   { id: 5, title: "Air-plane", amount: 6000 },
  //   { id: 6, title: "Boat", amount: 7000 },
  // ];
  const [items, setItem] = useState([]);
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)

  const onAddNewItem = (newItem) => {
    setItem((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=> element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element=> element<0).reduce((total,element)=>total+=element,0)*-1)
    setReportIncome(income)
    setReportExpense(expense)

  },[items],reportIncome,reportExpense)
  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
      }
    }>
      <div className="container">
        <h1>Income - Expenses </h1>
        <ReportComponent/>
        <FormComponent onAddItem={onAddNewItem} />
        <Transaction items={items} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
