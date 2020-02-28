import React from 'react';

const Receipts = ({ transaction }) => {
  return ( 
    <tr>
      <td>{transaction.type}</td>
      <td>{transaction.stock.symbol} - </td>
      <td>{transaction.quantity}</td>
      <td>@ ${transaction.price / 100 }</td>
    </tr>
  );
}

export default Receipts;