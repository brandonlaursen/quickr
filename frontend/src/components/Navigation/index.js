import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';

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
        <LoginFormModal />
        <NavLink to="/signup" className='signUpButton'>Sign Up</NavLink>
      </>
    );
  }

  return (
      <div className = 'homeDiv'>
        <NavLink exact to="/" className = "homeButton">Home</NavLink>
        {isLoaded && sessionLinks}
      </div>
  );
}

export default Navigation;
