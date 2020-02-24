import React from 'react';
import Info from './Info';
import { connect } from 'react-redux';

const Chart = ({ chart}) => {
  console.log("TCL: Chart -> chart", chart)
  return ( 
    <section className="section">
      <div className="tile is-parent">
        <article className="tile is-child notification">
          <div className="content">
            <h1 className="title">Chart</h1>
            <div className="content">
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>Ticker</th>
                    <th>Name</th>
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
    </section>
  );
}

const mapStateToProps = state => {
  return {
    chart: state.chart.chart
  }
};

const mapDispatchToProps = dispatch => {
  return {
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);