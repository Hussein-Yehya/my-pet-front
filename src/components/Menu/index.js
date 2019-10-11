import React from 'react';
import { Link } from 'react-router-dom';
import { CREATE, HOME, LOGIN, LOGOUT } from '../../helpers/urls';
const Menu = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <div className="container">
        <div className="row">
          <h5 className="col-4 font-weight-normal">
            <Link to="/">My Pet</Link>
          </h5>

          <nav className="col-8">
            <Link to={HOME}> Início </Link>
            <Link to={CREATE}> Criar Pets </Link>
            <Link to={LOGIN}> Login </Link>
            <Link to={LOGOUT}> Sair </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;
