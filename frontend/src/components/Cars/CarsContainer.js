import styles from './Cars.css';
import { getUserCars } from '../../store/cars';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { loadTheUsers } from '../../store/users';

const CarsContainer = () => {
  const dispatch = useDispatch();

  const { userId } = useParams();

  const cars = useSelector(state => state.car.cars);
  const user = useSelector(state => state.session.user);

  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUserCars(userId));
    dispatch(loadTheUsers());

  },[dispatch])

  return (
    <div>
      <div className='singleCarBackground2'> </div>
      <div className='singleCarBackgroundBottom2'></div>
      <div className='userProfileInfoContainer'>
        <img src={users[userId]?.profilePicUrl} alt="car"  className='profileHomePic'></img>
        <h1 className='homeprofilename'>Hello, {users[userId]?.username} </h1>
        {/* <h2> {users[userId]?.description}</h2> */}
      </div>
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



