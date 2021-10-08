import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './HomePage.css'


function HomePage({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <Redirect to='/' />
    );
  } else {
    sessionLinks = (
      <>
        <div class="home2" >
          <h2 className='homeTitle'> Find your dream your car.</h2>
          <h3 className='homeDescription'>Join like minded car enthusiasts today.</h3>
          <NavLink to="/signup" className='signupButtonHome'>Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <div>
      {sessionLinks}
    </div>
  )
}


export default HomePage;
