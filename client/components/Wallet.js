import React, { Component } from 'react';
import { connect } from 'react-redux';

class  Wallet extends Component {
  constructor() {
    super()
    this.state = { 
      ticker: '',
      quantity: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const transaction = { 
      stock: this.state.ticker,
      quantity: Number(this.state.quantity)
    }
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { ticker, quantity } = this.state;
    const { error } = this.props;
    return ( 
      <div className="tile is-parent">
        <article className="tile is-child notification is-success">
          <div className="content">
            <h1 className="title">Cash - $500.00</h1>
            <p className="subtitle">Start buying Shares</p>
            <div className="content">
              <form onSubmit= { this.handleSubmit}>
                <div className="field">
                  <label className="label">Ticker</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Ticker" name="ticker" onChange={this.handleChange} value={ticker} />
                  </div>
                </div>
    
                <div className="field">
                  <label className="label">Amount</label>
                  <div className="control">
                    <input className="input is-success" type="text" placeholder="Qty" name="quantity" onChange={this.handleChange} value={quantity}/>
                  </div>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link">Buy</button>
                    <div>
                      <br/>
                      {error && error.response && <div> {error.response.data}</div>}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state
  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);