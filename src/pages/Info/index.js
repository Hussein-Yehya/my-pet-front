import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { HOME } from '../../helpers/urls';

import './index.css';

const InfoPage = props => {
  const componentClassName = 'contact-info';

  console.log(props);
  const [info, setInfo] = useState([]);

  const { id } = props.match.params;

  useEffect(() => {
    fetch(`http://localhost:8080/api/contacts/${id}`)
      .then(res => res.json())
      .then(data => {
        setInfo(data);
      })
      .catch(console.log);
  }, []);

  return (
    <div className={`${componentClassName} card mb-4 shadow-sm`}>
      <img
        src={info.urlImage}
        alt=""
        className={`${componentClassName}__image`}
      />

      <div className="card-body">
        <p className="card-text">
          <b>Nome:</b> {info.name}w<b> Idade: </b> {info.age}
        </p>

        <p className="card-text">
          <b> Raça: </b> {info.breed}
        </p>
        <p className="card-text">
          <b> Descrição: </b> {info.description}
        </p>
        <Link to={HOME}> Ir para a Home </Link>
      </div>
    </div>
  );
};

export default InfoPage;
