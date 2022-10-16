import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

import { Nav } from './styled';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  };

  return (
    <Nav>
      <Link to="/">
        <FaHome size={23} />
      </Link>
      <Link to="/register">
        <FaUserAlt size={23} />
      </Link>

      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <FaPowerOff size={23} color="white" />
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={23} />
        </Link>
      )}

      {isLoggedIn && (
        <p>
          <FaCircle size={23} color="#66ff33" />
        </p>
      )}
    </Nav>
  );
}
