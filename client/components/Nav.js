import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store';

const Nav = ({ handleClick , isLoggedIn }) => {
  return ( 
    <div>
      {isLoggedIn ? (
        <nav className="level">
          <div className="level-left">
          </div>
          <div className="level-right">
            <p className="level-item">
              <Link to='/'>
                <u>Portfolio</u>
              </Link>
            </p>
            <p className="level-item">
              <Link to='/transactions'>
                <u>Transcations</u> 
              </Link>
            </p>
            <p class="level-item" onClick={handleClick}><a class="button is-success">Log Out</a></p>
          </div>
        </nav>
        ): null}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)