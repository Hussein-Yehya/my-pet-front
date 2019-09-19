import React from 'react';
import { Link } from 'react-router-dom';
import { CREATE, HOME } from '../../helpers/urls';
const Menu = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <div className="container">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <font>
            <font>My Pet</font>
          </font>
        </h5>

        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="./">
            <font>
              <Link to={HOME}> Início </Link>
            </font>
          </a>
          <a className="p-2 text-dark" href="./">
            <font>
              <Link to={CREATE}> Criar Pet </Link>
            </font>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
