import React from "react";
import Transaction from "./components/Transaction";
import './App.css'
function App() {
  return (
      <>
      <div className="container"> 
        <h1>
        Income and Expenses basic-app
        </h1>
        <Transaction />
      </div>
      </>
  );
}

export default App;
