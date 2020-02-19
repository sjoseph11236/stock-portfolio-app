import React, { Component } from 'react';
import Nav from './Nav';
import Portfolio from './Portfolio';
import Wallet from './Wallet';

class App extends Component { 
  render() {
    return(
      <div>
        <section className="hero is-primary is-bold">
          <div className="hero-body">
              <h1 className="title">
                Stock Portfolio
              </h1>
              <h2 className="subtitle">
                Welcome user here
              </h2>
          </div>
        </section>
        <section className="section">
          <Nav />
          <div className="tile is-ancestor">
            <Portfolio />
            <Wallet />
          </div>
        </section>
      </div>    
    )
  }
}

export default App;