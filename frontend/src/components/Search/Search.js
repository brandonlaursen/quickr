import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import styles from './Search.css'




function SearchPage() {

  const sessionUser = useSelector(state => state.session.user);

  return (
    <div>
      <h1>test</h1>
    </div>
  )
}


export default SearchPage;