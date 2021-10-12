import './UploadPage.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Upload () {
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
