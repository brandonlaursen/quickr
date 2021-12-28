import './EditForm.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { editCar } from '../../store/cars';
import { getCar } from '../../store/cars';
import { useParams } from 'react-router';
import { useShowModal } from '../../context/showModal';



function EditCar () {
  const dispatch = useDispatch();
  const { carId } = useParams();
  const car = useSelector(state => state.car[carId]);

  const { setShowModal } = useShowModal();

  const [name, setName] = useState(car.name);
  const [description, setDescription] = useState(car.description);
  const [imageUrl, setImageUrl] = useState(car.imageUrl);
  const [errors, setErrors] = useState([]);




  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateImageUrl = (e) => setImageUrl(e.target.value);

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

  const editCarImage = (e) => {
    e.preventDefault();
    const payload = {
      name,
      description,
      imageUrl,
    };

    dispatch(editCar(payload, carId)).then(() => dispatch(getCar(carId)))
    .then(() => setShowModal(false));

  }

  return(
    <div className='editFormContainer'>
      <h3 className='signUpTitle'>Edit Car</h3>
      <div className='editForm'>
        <form  onSubmit={editCarImage}>
          <input
            className='editNameInput'
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={updateName}
            maxLength="25"
            minLength="1"
            />
          <input
            className='editDesInput'
            type="text"
            placeholder="Description"
            required
            value={description}
            onChange={updateDescription}
            maxLength="250"
            minLength="1"
            />
          <input
            className='editImageInput'
            type="text"
            placeholder="ImageUrl"
            required
            minLength="1"
            value={imageUrl}
            onChange={updateImageUrl}
          />
          {
            !errors.length ? <button type="submit" className='editSubmitButton'>Submit</button>
            : <button className='editSubmitButton2'>Submit</button>
          }
        <button onClick={() => setShowModal(false)}type="button" className='editCancelButton'>Cancel</button>
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

export default EditCar;
