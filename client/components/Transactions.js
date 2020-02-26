import React from 'react';
import Receipts from './Receipts';

const Transactions = () => {
  return (  
    <section className="section">
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
                  <Receipts />
                </tbody>
              </table>
            </div>  
            </div>
          </div>
        </article>
      </div>
    </section>
    
  );
}

export default Transactions;