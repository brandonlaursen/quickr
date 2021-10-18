

import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const demo = (e) => {
    e.preventDefault();
    setCredential("Demo-lition");
    setPassword("password")
    return dispatch(sessionActions.login("Demo-lition", "password"))
  };


  return (
    <div class="login-page">
    <div class="form">
      <div class="login">
        <div class="login-header">
          <h3 className='loginTitle'>LOG IN</h3>
          <p></p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='login-form'>
          <ul className='errorList'>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label class='userLogin'>
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
              spellcheck='false'
              placeholder='Username or Email'
            />
          </label>
          <label class='passwordLogin'>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Password'
            />
          </label>
          <button type="submit">Log In</button>
          <button onMouseDown={demo}>Demo</button>
          <p class="message">Want to make an account? <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  </div>
  );
}

export default LoginFormPage;
