import PropTypes from "prop-types";
import { TransactionBody } from "./TransactionBody";
import css from "./TransactionHistory.module.css";

export function TransactionTable({ transaction }) {
  return (
    <table className={css.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transaction.map(({ id, type, amount, currency }) => {
          return (
            <TransactionBody
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}

TransactionTable.propTypes = {
  transaction: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })),
};
