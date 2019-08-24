import React from 'react';
import ContactItem from './Item';

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center>
        <h1>My Pets</h1>
      </center>

      <div className="container">
        <div className="row">
          {contacts.map((contact, index) => {
            const { name, age, breed, urlImage, id, description } = contact;

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
