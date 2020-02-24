import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { me } from './store'
import Register from './components/auth/Register';
import SignIn from './components/auth/SignIn';
import Main from './components/Main';
import Transactions from './components/Transactions';
import Chart from './components/Chart';

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props
    console.log("TCL: Routes -> render -> isLoggedIn ", isLoggedIn )

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path= '/' component={Chart} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/signin" component={SignIn} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/portfolio" component={ Main } />
            <Route exact path="/transactions" component={Transactions} /> 
          </Switch>
        )}
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
