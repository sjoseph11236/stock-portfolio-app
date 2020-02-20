import React from 'react';
import Portfolio from './Portfolio';
import Wallet from './Wallet';
import Nav from './Nav';

const Home = () => {
  return ( 
    <div>
      <Nav />
      <div className="tile is-ancestor">  
        <Portfolio />
        <Wallet />
      </div>
    </div>
  );
}

export default Home;