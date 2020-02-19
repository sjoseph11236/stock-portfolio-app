import React from 'react';
import Portfolio from './Portfolio';
import Wallet from './Wallet';

const Home = () => {
  return ( 
    <div className="tile is-ancestor">
      <Portfolio />
      <Wallet />
    </div>
  );
}

export default Home;