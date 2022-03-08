import './FormComponent.css'
const FormComponent = () => {
  
  const inputTitle =(event)=>{
      console.log(event.target.value)
  }
  const inputAmount =(event)=>{
    console.log(event.target.value)
  }
  const saveItem =(event)=>{
    event.preventDefault()
    console.log("Record success")
  }
  return (
    <>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>Name list</label>
          <input type="text" placeholder="Please input list" onChange={inputTitle}></input>
        </div>
        <div className="form-control">
          <labe>Amount</labe>
          <input type="number" placeholder="(+ Income, - Expense)" onChange={inputAmount}></input>
        </div>
        <div>
          <button className="btn" type="submit" onClick={saveItem}>Add data</button>
        </div>
      </form>
    </>
  );
};

export default FormComponent
