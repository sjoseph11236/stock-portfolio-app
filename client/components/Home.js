import React from 'react';
import Portfolio from './Portfolio';
import Wallet from './Wallet';
import Nav from './Nav';

const Home = () => {
  return ( 
    <div className="tile is-ancestor">
      <Nav />
      <Portfolio />
      <Wallet />
    </div>
  );
}

export default Home;