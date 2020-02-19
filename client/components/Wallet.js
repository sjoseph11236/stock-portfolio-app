import React from 'react';

const Wallet = () => {
  return ( 
    <div className="tile is-parent">
      <article className="tile is-child notification is-success">
        <div className="content">
          <h1 className="title">Cash - $500.00</h1>
          <p className="subtitle">Start buying Shares</p>
          <div className="content">
            <div class="field">
              <label class="label">Ticker</label>
              <div class="control">
                <input class="input" type="text" placeholder="Ticker"/>
              </div>
            </div>

            <div class="field">
              <label class="label">Amount</label>
              <div class="control">
                <input class="input is-success" type="text" placeholder="Qty" value=""/>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Wallet;