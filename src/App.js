import React from "react";
import Transaction from "./components/Transaction";
import './App.css'
import FormComponent from "./components/FormComponent"
function App() {
  return (
      <>
      <div className="container"> 
        <h1>
        Income and Expenses basic-app
        </h1>
        <FormComponent/>
        <Transaction />
      </div>
      </>
  );
}

export default App;
