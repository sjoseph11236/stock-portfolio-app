import React from 'react';

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
              <input class="input is-success" type="text" placeholder="Email" value=""/>
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input is-success" type="text" placeholder="Password" value=""/>
            </div>
          </div>
          
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Send</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div> 
  );
}

export default SignIn;