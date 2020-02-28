import React from 'react';
import Table from './Table';
import { connect } from 'react-redux';

const Portfolio = ({ stocks, portfolioTotal }) => {
  return ( 
    <div className="tile is-parent">
      <article className="tile is-child notification">
        <div className="content">
          <h1 className="title">Portfolio - ${ portfolioTotal / 100}</h1>
          <div className="content">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Ticker</th>
                  <th>Name</th>
                  <th>Change</th>
                  <th>Change Percent</th>
                  <th>Price</th>
                  <th>Shares</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                { stocks.map( (stock, id ) => {
                  return <Table key={id} stock={stock} />
                })}
              </tbody>
            </table>
          </div>  
          </div>
        </div>
      </article>
    </div>
  );
}

const mapStateToProps = state => { 
  return { 
    stocks: state.portfolio.stocks,
    portfolioTotal: state.portfolio.portfolioTotal
  }
}

export default connect(mapStateToProps, null)(Portfolio);