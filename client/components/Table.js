import React from 'react';

const Table = ({ stock }) => {
  return ( 
    <tr>
      <td>{stock.symbol}</td>
      <td>{stock.latestPrice}</td>
      <td>{stock.quantity}</td>
      <td>${stock.latestPrice  * stock.quantity}</td>
    </tr>
  );
}

export default Table;