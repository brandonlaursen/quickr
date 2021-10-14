import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink, useHistory  } from 'react-router-dom';
import './ProfileButton.css';
// import { useParams } from 'react-router';

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  // const { userId } = useParams();

  const user = useSelector(state => state.session.user)

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
          <NavLink to={`/profile/${user.id}`} ><li className='dropdownContents'>{user.username}</li></NavLink>
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
