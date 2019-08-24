import React from 'react';
import './index.css';

const ContactItem = ({ name, age, breed, urlImage }) => {
  const componentClassName = 'contact-item';

  return (
    <div className={`${componentClassName} card mb-4 shadow-sm`}>
      <img
        src={urlImage}
        alt=""
        className={`${componentClassName}__image`}
        style={{
          alignSelf: 'center',
          maxWidth: '100%',
          width: '350px',
          height: '195px',
          objectFit: 'cover'
        }}
      />

      <div className="card-body">
        <p className="card-text">
          <b>Nome:</b> {name}
          <b> Idade: </b> {age}
        </p>

        <p className="card-text">
          <b> Raça: </b> {breed}
        </p>
      </div>
    </div>
  );
};

export default ContactItem;
