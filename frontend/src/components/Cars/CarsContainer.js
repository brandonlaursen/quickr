import styles from './Cars.css'
import { getCars } from '../../store/cars';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";

const CarsContainer = () => {
  const cars = useSelector(state => state.car.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars()).then(() => console.log(cars))
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
