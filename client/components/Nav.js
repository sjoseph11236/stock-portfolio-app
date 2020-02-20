import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return ( 
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
      </div>
    </nav>
  );
}

export default Nav;