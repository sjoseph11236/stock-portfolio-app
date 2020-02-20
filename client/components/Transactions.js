import React from 'react';
import Info from './Info';
const Transactions = () => {
  return (  
    <div className="tile is-parent">
      <article className="tile is-child notification">
        <div className="content">
          <h1 className="title">Transactions
        </h1>
          <div className="content">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Ticker</th>
                  <th>Shares</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <Info />
              </tbody>
            </table>
          </div>  
          </div>
        </div>
      </article>
    </div>
  );
}

export default Transactions;