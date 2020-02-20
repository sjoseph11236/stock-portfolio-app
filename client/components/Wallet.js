import React from 'react';

const Wallet = () => {
  return ( 
    <div className="tile is-parent">
      <article className="tile is-child notification is-success">
        <div className="content">
          <h1 className="title">Cash - $500.00</h1>
          <p className="subtitle">Start buying Shares</p>
          <div className="content">
            <div className="field">
              <label className="label">Ticker</label>
              <div className="control">
                <input className="input" type="text" placeholder="Ticker"/>
              </div>
            </div>

            <div className="field">
              <label className="label">Amount</label>
              <div className="control">
                <input className="input is-success" type="text" placeholder="Qty" value=""/>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Wallet;