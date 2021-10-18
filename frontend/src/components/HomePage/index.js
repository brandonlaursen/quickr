import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import { getCars } from '../../store/cars';
import './HomePage.css'



function HomePage() {

  const dispatch = useDispatch();
  const cars = useSelector(state => state.car.cars);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(getCars());


  },[dispatch])


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
    <div>
      <div className='singleCarBackground3'> </div>
      <div className='singleCarBackgroundBottom3'></div>
      <div className='carImageContainer2'>
        <h1> Activity </h1>
        <div className='carImages2'>
          {cars && cars.map((car) =>
          <div >
            <NavLink to={`/car/${car.id}`}><img src={car.imageUrl} alt="car" className='carImage2' ></img></NavLink>
          </div>
          )}
        </div>
      </div>

    </div>
    );
  } else {
    sessionLinks = (
      <div >
        <div class="home2" >
          <h2 className='homeTitle'> Find your dream your car.</h2>
          <h3 className='homeDescription'>Join like minded car enthusiasts today.</h3>
          <NavLink to="/signup" className='signupButtonHome'>Sign Up</NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className='body'>
      {sessionLinks}
    <Footer />
    </div>
  )
}


export default HomePage;
