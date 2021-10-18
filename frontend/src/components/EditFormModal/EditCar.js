import './EditForm.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { editCar } from '../../store/cars';
import { getCar } from '../../store/cars';
import { useParams } from 'react-router';
import { useShowModal } from '../../context/showModal';



function EditCar () {
  const dispatch = useDispatch();
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
            />
          <input
            className='editDesInput'
            type="text"
            placeholder="Description"
            required
            value={description}
            onChange={updateDescription}
            />
          <input
            className='editImageInput'
            type="text"
            placeholder="ImageUrl"
            required
            value={imageUrl}
            onChange={updateImageUrl}
          />
        <button type="submit" className='editSubmitButton'>Submit</button>
            <button onClick={() => setShowModal(false)}type="button" className='editCancelButton'>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default EditCar;
