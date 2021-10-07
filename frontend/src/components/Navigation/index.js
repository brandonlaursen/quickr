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
          <div className='home'>
            <NavLink exact to="/" className='homeButton'>quickr</NavLink>
          </div>

        <div className='search-bar'>
          <input placeholder='Photos, cars, or albums' className='search-input'></input>
          {isLoaded && sessionLinks}
        </div>
      </div>
     </div>
  );
}

export default Navigation;
