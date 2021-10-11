import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './Footer.css'


function Footer() {
  return (
    <div className='footer'>
      <p className='created'>Created by Brandon Laursen</p>
      <a href='https://www.linkedin.com/in/brandon-laursen-398563218/' >
        <i className="fab fa-linkedin"></i>
      </a>
      <a href='https://github.com/brandonlaursen' >
        <i className="fab fa-github-square"></i>
      </a>
    </div>
  )
}


export default Footer;
