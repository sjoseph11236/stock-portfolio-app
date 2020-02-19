import React, { Component } from 'react';
import Nav from './Nav';
import Home from './Home';
import SignUp from './auth/SignUp';
import { Route, Switch, Link } from 'react-router-dom';

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
          <Switch> 
            <Route exact path='/' render={() => <Home />} />
            <Route exact path='/signup' render={() => <SignUp />}/>
          </Switch>
        </section>
      </div>    
    )
  }
}

export default App;