import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import './HomePage.css'
import CarsContainer from '../Cars/CarsContainer';
import Car from '../Car/SingleCar'


import { getCars } from '../../store/cars';

function HomePage({ isLoaded }) {

  const dispatch = useDispatch();
  const cars = useSelector(state => state.car.cars);

  useEffect(() => {
    dispatch(getCars());

    //working on this
    // dispatch(restoreUser()).then(() => dispatch(getCar(car.id)));

  },[dispatch])



  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
    <div>
      <div className='singleCarBackground3'> </div>
      <div className='singleCarBackgroundBottom3'></div>
      <div className='carImageContainer2'>
        <h1> Activity </h1>
        <div className='carImages2'>
          {cars && cars.map((car) =>
          <div >
            {/* <h1 className='carName'>{car.name}</h1> */}
            {/* <img src={car.imageUrl} alt="car" className='carImage'></img> */}
            <NavLink to={`/car/${car.id}`}><img src={car.imageUrl} alt="car" className='carImage2' ></img></NavLink>
            {/* <p className='carDescription'>{car.description}</p> */}
          </div>
          )}
        </div>
      </div>

    </div>
    );
  } else {
    sessionLinks = (
      <div >
        <div class="home2" >
          <h2 className='homeTitle'> Find your dream your car.</h2>
          <h3 className='homeDescription'>Join like minded car enthusiasts today.</h3>
          <NavLink to="/signup" className='signupButtonHome'>Sign Up</NavLink>
          {/* <Car/> */}
        </div>
      </div>
    );
  }

  return (
    <div className='body'>
      {sessionLinks}
    <Footer />
    </div>
  )
}


export default HomePage;
