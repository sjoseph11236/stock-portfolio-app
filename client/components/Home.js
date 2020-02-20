import React from 'react';
import Portfolio from './Portfolio';
import Wallet from './Wallet';


const Home = () => {
  return ( 
    <section className='section'>
      <div className="tile is-ancestor">  
        <Portfolio />
        <Wallet />
      </div>
    </section>
  );
}

export default Home;