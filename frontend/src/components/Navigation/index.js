import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import { useState, useEffect, useRef } from 'react';
import './Navigation.css';
import { useLocation } from 'react-router-dom';
import { findAllCars } from '../../store/search';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const location = useLocation();

  const carSearch = useSelector((state) => state.search.cars.cars);
  const ul = useRef(null);

  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('')

  const submit = () => {
    dispatch(findAllCars(searchTerm))
    setSearchTerm('')
    ul.current.classList.remove('hidden');
    setCount((oldCount) => oldCount + 1)
    document.querySelector('.searchResultsContainer').classList.remove('hidden')
  }


  useEffect(()=> {
    document.querySelector('.no-results').classList.add('hidden')
    dispatch(findAllCars('asdfasdfasdfasdfasdf'))
    setCount(0)

  }, [location]);

  useEffect(() => {

      if(carSearch?.length < 1 && count > 0) {

        document.querySelector('.no-results').classList.remove('hidden')
      }
      if(carSearch?.length > 1 || count === 0){
        document.querySelector('.no-results').classList.add('hidden')
      }
      setCount(0)
  },[carSearch]);

  const getRidOfResults = (e) => {
    if(!e.currentTarget.contains(e.relatedTarget)) {
      document.querySelector('.searchResultsContainer').classList.add('hidden');
    }

  }

  const getTheResults = () => {
    if(searchTerm.length) {
      return;
    }

  };

  const disappear = () => {
    document.querySelector('.searchResultsContainer').classList.add('hidden')
    dispatch(findAllCars('zxxcv!23124@312122'))
  };

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <button className= 'userButton'><NavLink to="/upload"> <i class="fa fa-upload black-color " ></i></NavLink></button>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className='buttonContainer'>
          <NavLink to="/login" className='loginButton'>Log In</NavLink>
          <NavLink to="/signup" className='signupButton'>Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className='search-bar'>
        <div className='header'>
          <div className='home'>
            <NavLink exact to="/" className='homeButton'>quickr</NavLink>
          </div>

        <div onBlur={(e) => getRidOfResults(e)}>
          <input
           placeholder='Photos, cars, or albums'
           className='search-input'
           value={searchTerm}
           onChange={((e) => setSearchTerm(e.target.value))}
           onKeyPress={(e) => e.key === 'Enter' && submit()}
           onFocus={getTheResults}
          ></input>
        <div className='searchResultsContainer'>

            <ul className='hidden resUl'
                ref={ul}
            >
              { carSearch && carSearch?.map(car => (
                <NavLink to={`/car/${car.id}`}  onClick={() => disappear()}><li>{car.name}</li> </NavLink>

              ))}
              <li className='hidden no-results'>No Results found</li>
            </ul>
            </div>
         </div>

          {isLoaded && sessionLinks}
        </div>
     </div>
    </div>
  );
}

export default Navigation;
