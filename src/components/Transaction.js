import Item from "./Item";
import "./Transaction.css";
import { v4 as uuidv4 } from 'uuid';

const Transaction = () => {
  const data = [
    { title: "Submarine", amount: 2000 },
    { title: "Bus", amount: 3000 },
    { title: "Car", amount: 4000 },
    { title: "Van", amount: 5000 },
    { title: "Air-plane", amount: 6000 },
    { title: "Boat", amount: 7000 }
  ];
  return (
    <>
      <ul className="item-list">
        {data.map((element) => {
          // return <Item title={element.title} amount={element.amount} key={uuidv4()}/>;
           return <Item {...element} key={uuidv4()} />;

        })}
      </ul>
    </>
  );
};

export default Transaction;
