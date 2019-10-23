import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  CREATE,
  HOME,
  LOGIN,
  LOGOUT,
  CREATE_USER,
  USER_MANAGEMENT,
  CREATE_USER_ADMIN
} from '../../helpers/urls';
import { deleteUserInfo } from 'helpers/user';
import { getUserInfo } from '../../helpers/user';
import { MY_PETS, EDIT_USER } from '../../helpers/urls';
import UserContext from 'store/user.context';

const Menu = () => {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const [userInfoContext, setUserInfoContext] = useContext(UserContext);

  const showMenu = userInfoContext && userInfoContext.userType === 'ADMIN';

  const toggleMenu = (): void => setIsMenuMobileOpen(!isMenuMobileOpen);

  const handleLogout = async () => {
    await deleteUserInfo();
    setUserInfoContext(getUserInfo());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <Link className="navbar-brand" to="/">
        My Pet
      </Link>

      <button
        className={`navbar-toggler ${isMenuMobileOpen ? '' : 'collapsed'}`}
        onClick={() => toggleMenu()}
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse  ${
          isMenuMobileOpen ? 'show' : ''
        }`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {userInfoContext ? (
            <li className="nav-item active">
              <Link className="nav-link" to={HOME}>
                 início 
              </Link>
            </li>
          ) : null}
          {userInfoContext ? (
            <li className="nav-item">
              <Link className="nav-link" to={CREATE}>
                 Criar Pets 
              </Link>
            </li>
          ) : null}
          {userInfoContext && !showMenu ? (
            <li className="nav-item">
              <Link className="nav-link" to={MY_PETS}>
                 Meus Pets 
              </Link>
            </li>
          ) : null}
          {!userInfoContext ? (
            <li className="nav-item">
              <Link className="nav-link" to={CREATE_USER}>
                Criar Usuário{' '}
              </Link>
            </li>
          ) : null}
          {showMenu ? (
            <li className="nav-item">
              <Link className="nav-link" to={USER_MANAGEMENT}>
                Gerenciar Usuário{' '}
              </Link>
            </li>
          ) : null}
          {showMenu ? (
            <li className="nav-item">
              <Link className="nav-link" to={CREATE_USER_ADMIN}>
                Criar Usuário Admin
              </Link>
            </li>
          ) : null}

          {userInfoContext ? (
            <li className="nav-item">
              <Link
                className="nav-link"
                to={`${EDIT_USER}/${userInfoContext.id}`}
              >
                {' '}
                Perfil{' '}
              </Link>
            </li>
          ) : null}

          {!userInfoContext ? (
            <li className="nav-item">
              <Link className="nav-link" to={LOGIN}>
                Entrar
              </Link>
            </li>
          ) : null}
          {userInfoContext ? (
            <li className="nav-item">
              <Link
                className="nav-link"
                to={LOGOUT}
                onClick={() => handleLogout()}
              >
                 Sair 
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
