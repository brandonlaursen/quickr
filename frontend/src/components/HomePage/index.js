import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './HomePage.css'


function HomePage() {

  return (
    <div class="home2" >
      <h2 className='homeTitle'> Find your dream your car.</h2>
      <h3 className='homeDescription'>Join like minded car enthusiasts today.</h3>
      <NavLink to="/signup" className='signupButtonHome'>Sign Up</NavLink>
    </div>
  )
}


export default HomePage;
