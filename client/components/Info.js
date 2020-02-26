import React from 'react';

const Info = ({ stock }) => {
  return ( 
    <tr>
      <td>{stock.symbol} - </td>
      <td>{stock.name}</td>
      <td>{stock.latestPrice}</td>
      <td>{stock.change}</td>
      <td>{stock.changePercent}</td>
    </tr>
  );
}

export default Info;