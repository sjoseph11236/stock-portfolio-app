import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { me } from './store'
import Register from './components/auth/Register';
import SignIn from './components/auth/SignIn';
import Home from './components/Home';
import Transactions from './components/Transactions';

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
        <Route exact path="/register" component={Register} />
        <Route exact path="/signin" component={SignIn} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/" component={Home} />
            <Route exact path="/transactions" component={Transactions} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={SignIn} />
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
