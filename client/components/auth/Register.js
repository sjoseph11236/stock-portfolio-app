import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { auth } from '../../store';
const Register = ({ name, handleSubmit, error }) => {
  return ( 
    <div className="container">   
      <section className="section">
        <div className="box">
          <h1 className='title has-text-centered'>Register</h1>
          <form onSubmit={ handleSubmit } name={ name }>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Name"/>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input is-success" type="email" placeholder="Email" value=""/>
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input is-success" type="password" placeholder="Password" value=""/>
              </div>
            </div>
            
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Send</button>
                <div>
                  <br/>
                  <Link to='/signin'>
                    <h2 className='has-text-centered'><u>Sign In here</u></h2>
                  </Link>
                  <br/>
                  {error && error.response && <div> {error.response.data}</div>}
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div> 
  );
}

const mapStateToProps = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Register);

Register.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}