import styles from './Cars.css'
import { getUserCars } from '../../store/cars';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { restoreUser } from '../../store/session';
import { NavLink } from 'react-router-dom';
import { getCar, getAllUsers } from '../../store/cars';
import { useParams } from 'react-router';
import { loadTheUsers } from '../../store/users';

const CarsContainer = () => {
  const { userId } = useParams();

  const { carId } = useParams(); //*
  const cars = useSelector(state => state.car.cars);

  const user = useSelector(state => state.session.user)

  // const car = useSelector(state => state.car[carId]); //*

  const users = useSelector(state => state.users)
  // const user2 = useSelector(state => state.users.userId)
  //working on this
  // const car = useSelector(state => state.car.cars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCars(userId))
    dispatch(loadTheUsers())


    //working on this
    // dispatch(restoreUser()).then(() => dispatch(getCar(car.id)));

  },[dispatch])

  return (
    <div>
      <div className='singleCarBackground2'> </div>
      <div className='singleCarBackgroundBottom2'></div>
        <h2>test {users[userId]?.username} test</h2>
        <h2>test {users[userId]?.description} test</h2>
        <img src={users[userId]?.profilePicUrl} alt="car" ></img>
      <div className='carImageContainer'>
        {user?.id === +userId &&
          (
          <NavLink to="/upload" className='Upload'>Upload an image</NavLink> )
        }
        <div className='carImages'>
          {cars && cars.map((car) =>
          <div className='column'>
            {/* <h1 className='carName'>{car.name}</h1> */}
            {/* <img src={car.imageUrl} alt="car" className='carImage'></img> */}
            <NavLink to={`/car/${car.id}`}><img src={car.imageUrl} alt="car" className='carImage' ></img></NavLink>
            {/* <p className='carDescription'>{car.description}</p> */}
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CarsContainer;


//<NavLink to={`/profile/${user.id}`} >
