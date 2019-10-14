import React from 'react';
import ContactItem from './Item';
import './index.css';

const Contacts = ({ contacts }) => {
  return (
    <div>
      <div className="c-title-box">
        <center>
          <h1>
            <strong>My Pet </strong>
          </h1>
        </center>
      </div>

      <div className="container">
        <div className="row">
          {contacts.map((contact, index) => {
            const { name, age, breed, urlImage, id } = contact;

            return (
              <div className="col-md-4" key={index}>
                <ContactItem
                  name={name}
                  age={age}
                  breed={breed}
                  urlImage={urlImage}
                  id={id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
