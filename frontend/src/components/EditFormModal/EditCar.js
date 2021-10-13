
import './EditForm.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { editCar } from '../../store/cars';
import { getUserCars } from '../../store/cars';
import { getCar } from '../../store/cars';
import { Redirect, useParams } from 'react-router';
import { useShowModal } from '../../context/showModal';



function EditCar () {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const car = useSelector(state => state.car)
  const { carId } = useParams();

  const { setShowModal } = useShowModal();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateImageUrl = (e) => setImageUrl(e.target.value);

  const editCarImage = (e) => {
    e.preventDefault();
    const payload = {
      name,
      description,
      imageUrl,
    };

    dispatch(editCar(payload, carId)).then(() => dispatch(getCar(carId)))
    .then(() => setShowModal(false));

  //  if(car) history.push('/')
  }

  return(
    <section className='editForm'>
      <form  onSubmit={editCarImage}>
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
       <button type="submit">Submit</button>
       <NavLink to="/"> <button type="button" >Cancel</button> </NavLink>
      </form>
    </section>
  )
}

export default EditCar;
