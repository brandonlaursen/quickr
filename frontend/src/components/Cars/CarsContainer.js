import styles from './Cars.css'
import { getUserCars } from '../../store/cars';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { restoreUser } from '../../store/session'

const CarsContainer = () => {
  const cars = useSelector(state => state.car.cars);

  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser()).then(() => dispatch(getUserCars(user.id)))
  },[dispatch])

  return (
    <div className='carImageContainer'>
      {cars && cars.map((car) =>
      <>
      <div className='column'>
        {/* <h1 className='carName'>{car.name}</h1> */}
        <img src={car.imageUrl} alt="car" className='carImage'></img>
        {/* <p className='carDescription'>{car.description}</p> */}
      </div>
      </>
      )}
    </div>
  )
}

export default CarsContainer;
