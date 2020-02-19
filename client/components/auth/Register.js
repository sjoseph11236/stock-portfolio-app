import React from 'react'

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
              </div>
            </div>
          </form>
        </div>
      </section>
    </div> 
  );
}

export default Register;