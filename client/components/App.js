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
    if(this.state.isSignedIn) { 
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
              <Route exact path='/transactions' render={() => <Transactions />} />
            </Switch> 
          </section> 
        </div>    
      )
    }
    else {
      return(
        <div>
          <section className="hero is-primary is-bold">
            <div className="hero-body">
                <h1 className="title">
                  Stock Portfolio
                </h1>
            </div>
          </section>
          <section className="section">
            <Route exact path='/register' render={()=> <Register/>} />
            <Route exact path='/' render={() => <SignIn />}/>
          </section> 
        </div>    
      )
    }
  }
}

export default App;