import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { me } from './store'
import Register from './components/auth/Register';
import SignIn from './components/auth/SignIn';
import Main from './components/Main';
import Transactions from './components/Transactions';
import Chart from './components/Chart';
import { getChartThunk }from './store/reducers/chart';
import { getTransactionsThunk } from './store/reducers/transaction';
import { getPortfolioThunk } from './store/reducers/portfolio';

class Routes extends Component {

  async componentDidMount() {
    await this.props.loadInitialData();
    await this.props.getChartThunk();  
    if(this.props.userId){
      await this.props.getPortfolioThunk(this.props.userId);
      await this.props.getTransactionsThunk(this.props.userId);
    }
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <>
        {/* Routes placed here are available to all visitors */}
        <Route exact path= '/' component={Chart} />
        <Route path="/register" component={Register} />
        <Route exact path="/signin" component={SignIn} />
        {isLoggedIn && (
          <>
            {/* Routes placed here are only available after logging in */}
            <Route  path="/portfolio" component={ Main } />
            <Route  path="/transactions" component={Transactions} /> 
          </>
        )}
      </>
    )
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    userId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }, 
    getChartThunk: symbols => dispatch(getChartThunk(symbols)),
    getTransactionsThunk: userId => dispatch(getTransactionsThunk(userId)),
    getPortfolioThunk: userId => dispatch(getPortfolioThunk(userId))
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
