import React, { Component } from 'react';
import Home from './Home';
import Register from './auth/Register';
import { Route, Switch } from 'react-router-dom';
import SignIn from './auth/SignIn';
import Transactions from './Transactions';
import Nav from './Nav';
class App extends Component { 
  constructor(){
    super()
    this.state = { 
      isSignedIn : false
    }
  }
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
          { this.state.isSignedIn ? <Nav /> : null }
          <Switch> 
            <Route exact path='/' render={()=> <Register/>} />
            <Route exact path='/home' render={() => <Home />} />
            <Route exact path='/signin' render={() => <SignIn />}/>
            <Route exact path='/transactions' render={() => <Transactions />} />
          </Switch> 
        </section>
      </div>    
    )
  }
}

export default App;