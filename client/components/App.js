import React, { Component } from 'react';
import Nav from './Nav';
class App extends Component { 
  render() {
    return(
      <div>
        <section class="hero is-primary is-bold">
          <div class="hero-body">
              <h1 class="title">
                Stock Portfolio
              </h1>
              <h2 class="subtitle">
                Welcome user here
              </h2>
          </div>
        </section>
        <section class="section">
          <Nav />
        </section>
      </div>    
    )
  }
}

export default App;