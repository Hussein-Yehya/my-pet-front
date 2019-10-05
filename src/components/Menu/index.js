import React from 'react';
import { Link } from 'react-router-dom';
import { CREATE, HOME } from '../../helpers/urls';
const Menu = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <div className="container">
        <div className="row">
          <h5 className="col-4 font-weight-normal">
            <font>My Pet</font>
          </h5>

          <nav className="col-8">
            <Link to={HOME}> Início </Link>
            <Link to={CREATE}> Criar Pet </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;
