import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { HOME } from '../../helpers/urls';

import './index.css';

const InfoPage = props => {
  const componentClassName = 'contact-info';

  const [info, setInfo, redirect] = useState([]);

  const { id } = props.match.params;

  useEffect(() => {
    fetch(`https://ancient-fortress-81160.herokuapp.com/api/contacts/${id}`)
      .then(res => res.json())
      .then(data => {
        setInfo(data);
      })
      .catch(console.log);
  }, []);

  const deleteContact = () => {
    fetch(`https://ancient-fortress-81160.herokuapp.com/api/contacts/${id}`, {
      method: 'DELETE'
    })
      .then(() => redirectToHome())
      .catch(error => console.log(error));
  };

  const redirectToHome = () => {
    console.log('redirect to home');
    return <Redirect to={HOME} />;
  };

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

        <button
          type="submit"
          onClick={deleteContact}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default InfoPage;
