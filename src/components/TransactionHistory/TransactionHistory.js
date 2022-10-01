import React from 'react';
import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
      </thead>
      <tbody>
      {items.map(transaction =>(
        <tr key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string,
    type:PropTypes.string,
    amount:PropTypes.string,
    currency:PropTypes.string,
  }))
}
