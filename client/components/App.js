import React, { Component } from 'react';
import Home from './Home';
import Register from './auth/Register';
import { Route, Switch } from 'react-router-dom';
import SignIn from './auth/SignIn';

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
       <Route exact path='/' render={()=> <SignIn />} />
        <section className="section">
          <Switch> 
            <Route exact path='/home' render={() => <Home />} />
            <Route exact path='/register' render={() => <Register />}/>
          </Switch>
        </section>
      </div>    
    )
  }
}

export default App;