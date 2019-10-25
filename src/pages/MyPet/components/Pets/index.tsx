import React from 'react';
import './index.css';
import { PetInterface } from '../../../../Interfaces/Pets/index.interface';
import PetItem from 'components/PetItem';

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
                    hasEdit={true}
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
