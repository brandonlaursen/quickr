import './UploadPage.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Upload () {
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateImageUrl = (e) => setImageUrl(e.target.value);

  return(
    <section  className='carForm'>
      <form >
        <input
          type="text"
          placeholder="Name"
          required
           />
        <input
          type="text"
          placeholder="Description"
          required
           />
        <input
          type="text"
          placeholder="ImageUrl"
          required
         />
        <button type="submit">Upload Car</button>
        <button type="button" >Cancel</button>
      </form>
    </section>
  )
}

export default Upload;
