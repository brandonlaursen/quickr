import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink, useHistory  } from 'react-router-dom';
import './ProfileButton.css';


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <div className='dropdown-container'>
      <button onClick={openMenu} className= 'userButton'>
        <i class="fas fa-car" ></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className='dropdownContents'>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout} className='dropdownLogOut'>Log Out</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
