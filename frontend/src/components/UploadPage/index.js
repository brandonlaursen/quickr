import './UploadPage.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createCar } from '../../store/cars';
import { getUserCars } from '../../store/cars';

function Upload () {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const car = useSelector(state => state.car.list)

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateImageUrl = (e) => setImageUrl(e.target.value);

  const addCar = (e) => {
    e.preventDefault();
    const payload = {
      name,
      description,
      imageUrl,
      userId: user.id
    };

    dispatch(createCar(payload)).then(() => dispatch(getUserCars(user.id)))
    // console.log(car)
  //  if(car) history.push(`/car/${car.id}`)
   if(car) history.push('/')
  }

  return(
    <section  className='carForm'>
      <form  onSubmit={addCar}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={updateName}
           />
        <input
          type="text"
          placeholder="Description"
          required
          value={description}
          onChange={updateDescription}
           />
        <input
          type="text"
          placeholder="ImageUrl"
          required
          value={imageUrl}
          onChange={updateImageUrl}
         />
       <button type="submit">Upload Car</button>
       <NavLink to="/"> <button type="button" >Cancel</button> </NavLink>
      </form>
    </section>
  )
}

export default Upload;
