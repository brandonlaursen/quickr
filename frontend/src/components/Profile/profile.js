import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
// import './profile.css'
import CarsContainer from '../Cars/CarsContainer';
import Car from '../Car/SingleCar'
import SignupFormPage from '../SignupFormPage';

function Profile({ isLoaded }) {

  const sessionUser = useSelector(state => state.session.user);

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <div>
  //       <CarsContainer/>
  //     </div>
  //   );
  // }

  return (
    <div className='body'>
      <CarsContainer/>
    </div>
  )
}


export default Profile;
