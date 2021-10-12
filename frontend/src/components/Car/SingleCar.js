import styles from './Car.css'
import { getCar } from '../../store/cars';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { restoreUser } from '../../store/session'


const Car = () => {
  const car = useSelector(state => state.car);

  // const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser()).then(() => dispatch(getCar(car.id)))
  },[dispatch])

  return (
    <div>
      <h1>{car.name}</h1>
      <h2>test</h2>
    </div>
  )
}

export default Car;
