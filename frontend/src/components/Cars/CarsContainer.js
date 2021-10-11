import styles from './Cars.css'
import { getCars } from '../../store/cars';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";

const CarsContainer = () => {
  const cars = useSelector(state => state.car.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars()).then(() => console.log(cars))
  },[dispatch, cars])

  return (
    <div>
      {cars && cars.map((car) =>
      <>
      <img src={car.imageUrl} alt="car"></img>
      <h1>{car.description}</h1>
      </>
      )}
    </div>
  )
}

export default CarsContainer;
