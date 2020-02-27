import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPurchaseTickerDataThunk } from '../store/reducers/transaction';

class  Wallet extends Component {
  constructor() {
    super()
    this.state = { 
      ticker: '',
      quantity: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkIfCanAfford = this.checkIfCanAfford.bind(this);
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const { getPurchaseTickerDataThunk } = this.props;
    const { ticker, quantity } = this.state;
    // Get ticker latest Price
    await getPurchaseTickerDataThunk(ticker);
    // Check if user can afford. 
    const canAfford = this.checkIfCanAfford()
    console.log("TCL: Wallet -> handleSubmit -> canAfford ", canAfford )
    if(!canAfford) console.log("can't afford");
    
    const transaction = { 
      stock: ticker,
      quantity: Number(quantity)
    }

    this.setState({
      ticker: '',
      quantity: ''
    })

  }

  checkIfCanAfford(){
    const { purchase, cash } = this.props;
    const { quantity } = this.state;
    const price = purchase.latestPrice;
    console.log("TCL: Wallet -> checkIfCanAfford -> price", price)

    // Calculate total value of transaction. 
    const total = Math.round(price * quantity * 100);
    console.log("TCL: Wallet -> checkIfCanAfford -> total", total)
    if(total > cash) return false;
    return true;
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { ticker, quantity } = this.state;
    const { error, cash } = this.props;
    return ( 
      <div className="tile is-parent">
        <article className="tile is-child notification is-success">
          <div className="content">
            <h1 className="title">Cash - ${ cash / 100 } </h1>
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
                    <button className="button is-link"  disabled={ ticker && quantity ? false : true }>Buy</button>
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
    error: state,
    cash: state.user.cash,
    purchase: state.transaction.purchase
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getPurchaseTickerDataThunk: symbols => dispatch(getPurchaseTickerDataThunk(symbols)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);