import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { HOME } from '../../helpers/urls';

const InfoPage = props => {
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
    <div className="container">
      <h1> Olá voce esta vendo: {id} </h1>

      {info.description}
      <Link to={HOME}> Ir para a Home </Link>
    </div>
  );
};

export default InfoPage;
