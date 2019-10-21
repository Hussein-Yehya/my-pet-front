import React from 'react';
import PetItem from './Item';
import './index.css';
import { PetInterface } from '../../../../Interfaces/Pets/index.interface';

interface Props {
  pets: PetInterface[];
}

const Pets = ({ pets }: Props) => {
  return (
    <div>
      <div className="c-title-box"></div>

      <div className="container">
        <div className="row">
          {pets &&
            pets.map((pet, index) => {
              const { name, age, breed, urlImage, id } = pet;

              return (
                <div className="col-md-4" key={index}>
                  <PetItem
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

export default Pets;
