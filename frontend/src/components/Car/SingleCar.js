import styles from './Car.css'
import { getCar } from '../../store/cars';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { restoreUser } from '../../store/session'
import { useParams } from 'react-router';
import { NavLink, useHistory  } from 'react-router-dom';
import { deleteCar } from '../../store/cars';
import { getUserCars } from '../../store/cars';

const Car = () => {
  const history = useHistory();
  const { carId } = useParams();
  const car = useSelector(state => state.car[carId]);

//  const car = cars.find((car) => car.id === carId);

  const user = useSelector(state => state.session.user)

  const dispatch = useDispatch();

  const removeCar = (e) => {
    e.preventDefault();

    dispatch(deleteCar(carId)).then(() => dispatch(getUserCars(user.id)))
    history.push('/')
  }

  useEffect(() => {
     dispatch(getCar(carId))

  },[dispatch])


  return (
    <div>
      <h1>{car?.name}</h1>
      <img src={car?.imageUrl} alt="car" className='carImage' ></img>
      <button onClick={removeCar}>Delete</button>
      <NavLink to="/"> <button>Back to Images</button> </NavLink>
      <NavLink to={`/car/${car?.id}/edit`}> <button>Edit</button> </NavLink>
      <p className='carDescription'>{car?.description}</p>
    </div>
  )
}

export default Car;
