import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className='buttonContainer'>
          <NavLink to="/login" className='loginButton'>Log In</NavLink>
          <NavLink to="/signup" className='signupButton'>Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
      <div>
        <div className='header'>
          <NavLink exact to="/" className='homeButton'>Home</NavLink>
        </div>
        <div className='search-bar'>
          <input value='search...' className='search-input'></input>
        </div>
          {isLoaded && sessionLinks}
     </div>
  );
}

export default Navigation;
