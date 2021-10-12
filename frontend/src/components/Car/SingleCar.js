import styles from './Car.css'
import { getCar } from '../../store/cars';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { restoreUser } from '../../store/session'
import { useParams } from 'react-router';

const Car = () => {
  const { carId } = useParams();
  const car = useSelector(state => state.car[carId]);

//  const car = cars.find((car) => car.id === carId);

  // const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getCar(carId))
     console.log(car)
  },[dispatch])

  return (
    <div>
      <h1>{car?.name}</h1>
      <h2>test</h2>
    </div>
  )
}

export default Car;
