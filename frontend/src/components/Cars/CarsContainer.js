import styles from './Cars.css'
import { getUserCars } from '../../store/cars';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { restoreUser } from '../../store/session';
import { NavLink } from 'react-router-dom';
import { getCar } from '../../store/cars';

const CarsContainer = () => {
  const cars = useSelector(state => state.car.cars);

  const user = useSelector(state => state.session.user)

  //working on this
  // const car = useSelector(state => state.car.cars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser()).then(() => dispatch(getUserCars(user.id)));

    //working on this
    // dispatch(restoreUser()).then(() => dispatch(getCar(car.id)));

  },[dispatch])

  return (
    <div className='carImageContainer'>
      <NavLink to="/upload" className='Upload'>Upload an image</NavLink>
      {cars && cars.map((car) =>
      <>
      <div className='column'>
        {/* <h1 className='carName'>{car.name}</h1> */}
        {/* <img src={car.imageUrl} alt="car" className='carImage'></img> */}
        <NavLink to={`/car/${car.id}`}><img src={car.imageUrl} alt="car" className='carImage' ></img></NavLink>
        {/* <p className='carDescription'>{car.description}</p> */}
      </div>
      </>
      )}
    </div>
  )
}

export default CarsContainer;
