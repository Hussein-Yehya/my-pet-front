import React from 'react';
import { Link } from 'react-router-dom';
import {
  CREATE,
  HOME,
  LOGIN,
  LOGOUT,
  CREATE_USER,
  USER_MANAGEMENT
} from '../../helpers/urls';

const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <Link className="navbar-brand" to="/">
          My Pet
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to={HOME}>
                 início 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={CREATE}>
                 Criar Pets 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={CREATE_USER}>
                Criar Usuário{' '}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={USER_MANAGEMENT}>
                Gerenciar Usuário{' '}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={LOGIN}>
                Entrar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={LOGOUT}>
                 Sair 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
