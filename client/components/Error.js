import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return ( 
    <section className="section">
      <div className="con">
        <h1 className='title'>404 NOT FOUND</h1>
        <Link to='/'>
          <p>Please  Register</p>
        </Link>
      </div>
    </section>
  );
}

export default Error;