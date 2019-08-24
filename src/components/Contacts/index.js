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
          {contacts.map((contact, index) => (
            <div className="col-md-4" key={index}>
              <ContactItem
                name={contact.name}
                age={contact.age}
                breed={contact.breed}
                urlImage={contact.urlImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
