import React from 'react';
import Info from './Info';

const Portfolio = () => {
  return ( 
    <div className="tile is-parent">
      <article className="tile is-child notification">
        <div className="content">
          <h1 className="title">Portfolio - $5943.34</h1>
          <div className="content">
          <div class="table-container">
            <table class="table">
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

export default Portfolio;