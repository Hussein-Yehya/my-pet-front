import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import { INFO, EDIT } from '../../../../../helpers/urls';

const ContactItem = ({ name, age, breed, urlImage, id }) => {
  const componentClassName = 'contact-item';

  return (
    <div className={`${componentClassName} card mb-4 shadow-sm`}>
      <img src={urlImage} alt="" className={`${componentClassName}__image`} />

      <div className="card-body">
        <p className="card-text">
          <b>Nome:</b> {name}
          <b> Idade: </b> {age}
        </p>

        <p className="card-text">
          <b> Raça: </b> {breed}
        </p>
        <Link to={`${INFO}/${id}`}>Ver mais</Link>

        <Link to={`${EDIT}/${id}`}> Editar </Link>
      </div>
    </div>
  );
};

export default ContactItem;
