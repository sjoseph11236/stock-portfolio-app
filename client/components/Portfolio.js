import React from 'react';
import Table from './Table';
import { connect } from 'react-redux';

const Portfolio = ({ stocks }) => {
  return ( 
    <div className="tile is-parent">
      <article className="tile is-child notification">
        <div className="content">
          <h1 className="title">Portfolio - $5943.34</h1>
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
                <Table />
              </tbody>
            </table>
          </div>  
          </div>
        </div>
      </article>
    </div>
  );
}

export default connect(mapStateToProps, null)(Portfolio);