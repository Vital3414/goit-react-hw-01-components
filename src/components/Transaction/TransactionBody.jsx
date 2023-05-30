import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export function TransactionBody({ type, amount, currency }) {
  return (
    <tr>
      <td className={css.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionBody.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
