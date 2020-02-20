import React from 'react';
import Portfolio from './Portfolio';
import Wallet from './Wallet';


const Home = () => {
  return ( 
    <div>
      <div className="tile is-ancestor">  
        <Portfolio />
        <Wallet />
      </div>
    </div>
  );
}

export default Home;