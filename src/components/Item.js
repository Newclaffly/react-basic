import PropTypes from "prop-types"; // ES6
import './Item.css'
const Item = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  return (
    <li className={status}>
      {title} <span>{amount}</span>
    </li>
  );
};

Item.prototype = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
