import styles from './Car.css'
import { getCar } from '../../store/cars';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { restoreUser } from '../../store/session'
import { useParams } from 'react-router';
import { NavLink, useHistory  } from 'react-router-dom';
import { deleteCar } from '../../store/cars';
import { getUserCars } from '../../store/cars';
import EditCarInfo from '../EditFormModal';

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
    <div className='singleCarComponent'>
      <h1 className='singleCarName'>{car?.name}</h1>
      <img src={car?.imageUrl} alt="car" className='carImage' ></img>
      <div className='buttonContainer'>
        <button onClick={removeCar} className='delete'>Delete</button>
        <NavLink to="/"> <button className='back'>Back to Images</button> </NavLink>
        <EditCarInfo />
        {/* <NavLink to={`/car/${car?.id}/edit`}> <button className='edit'>Edit</button> </NavLink> */}
      </div>
      <div className='descriptionContainer'>
        <p className='singleCarDescription'>{car?.description}</p>
      </div>
    </div>
  )
}

export default Car;
