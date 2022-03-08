import { useState } from "react";
import "./FormComponent.css";
import { v4 as uuidv4 } from "uuid";

const FormComponent = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    console.log("Record success");
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    props.onAddItem(itemData)
    setTitle("");
    setAmount(0);
  };
  return (
    <>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>Name list</label>
          <input
            type="text"
            placeholder="Please input list"
            onChange={inputTitle}
            value={title}
          ></input>
        </div>
        <div className="form-control">
          <labe>Amount</labe>
          <input
            type="number"
            placeholder="(+ Income, - Expense)"
            onChange={inputAmount}
            value={amount}
          ></input>
        </div>
        <div>
          <button className="btn" type="submit" onClick={saveItem}>
            Add data
          </button>
        </div>
      </form>
    </>
  );
};

export default FormComponent;
