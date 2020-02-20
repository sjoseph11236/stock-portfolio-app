import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return ( 
    <div className="container">   
      <section className="section">
        <div className="box">
          <h1 className='title has-text-centered'>Register</h1>
          <form>
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Name"/>
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input is-success" type="email" placeholder="Email" value=""/>
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input is-success" type="password" placeholder="Password" value=""/>
              </div>
            </div>
            
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Send</button>
                <div>
                <br/>
                <Link to='/'>
                  <h2 className='has-text-centered'><u>Sign In here</u></h2>
                </Link>
              </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div> 
  );
}

export default Register;