import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink  } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';


function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Passwords must match']);
  };

  return (
    <div  class='signUpContainer'>
      <div className='signUpForm' >
        <form onSubmit={handleSubmit}  >
          <ul className='error'>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <h3 className='signUpTitle'>SIGN UP</h3>
            <label>
              <input
                className='signUpFormInput'
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='Email'
              />
            </label>
            <label>
              <input
                className='signUpFormInput'
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder='Username'
              />
            </label>
            <label>

              <input
                className='signUpFormInput'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='Password'
              />
            </label>
            <label>
              <input
                className='signUpFormInput'
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder='Confirm Password'
              />
            </label>
            <button type="submit" className='signUpFormButton'>Sign Up</button>
            <p className='already'>Already a quickr member?
            <NavLink to="/login" className='loginButtonSignUp'>Log in </NavLink>
            </p>
        </form>
      </div>
   </div>
  );
}

export default SignupFormPage;
