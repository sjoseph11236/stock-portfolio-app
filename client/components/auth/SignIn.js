import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (  
    <div className="container">   
    <section className="section">
      <div className="box">
        <h1 className='title has-text-centered'>Sign In</h1>
        <form>
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
                <Link to='/register'>
                  <h2 className='has-text-centered'><u>Register here</u></h2>
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

export default SignIn;