import './UploadPage.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createCar } from '../../store/cars';
import { getUserCars } from '../../store/cars';

function Upload () {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const car = useSelector(state => state.car.list);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errors, setErrors] = useState([]);

  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateImageUrl =  (e) => setImageUrl(e.target.value);

  useEffect(() => {
    const errors = [];

    let testRegex = /^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png|bmp)$/;
    let imageUrlReg = imageUrl;
    if (!testRegex.test(imageUrlReg)) {
      errors.push('Must provide a proper imageUrl')
    }

    if(name.length === 25) errors.push("Max Length for a Name is 25 characters");
    if(name.length < 1) errors.push("Name needs at least one character");
    if(description.length === 250) errors.push("Max Length for a description is 250 characters");
    if(description.length < 1) errors.push("Description needs at least one character");

    setErrors(errors)

  },[name, description, imageUrl])

  const addCar = (e) => {
    e.preventDefault();
    const payload = {
      name,
      description,
      imageUrl,
      userId: user.id
    };

   dispatch(createCar(payload)).then(() => dispatch(getUserCars(user.id)))

   if(car) history.push('/')
  };

  return(
    <div className='uploadContainer'>
      <div className='carForm'>
        <h3 className='signUpTitleUpload'>UPLOAD</h3>
        <form  onSubmit={addCar}>
          <input
            className='uploadNameFormInput'
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={updateName}
            maxLength="25"
            minLength="1"
            />
          <input
            className='uploadDesFormInput'
            type="text"
            placeholder="Description"
            required
            value={description}
            onChange={updateDescription}
            maxLength="250"
            minLength="1"
            />
          <input
            className='uploadImageFormInput'
            type="text"
            placeholder="ImageUrl"
            required
            value={imageUrl}
            onChange={updateImageUrl}
            minLength="1"
          />
          {!errors.length ? <button type="submit" className='uploadButton' onSubmit={(e) => e.preventDefault()}>Upload Car</button>
          :  <button type="submit" className='uploadButtonNo'>Upload Car</button>
          }
        <NavLink to="/"> <button type="button"className='uploadCancel' >Cancel</button> </NavLink>
        </form>
        <ul className="errors">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
      </div>
    </div>
  )
}

export default Upload;
