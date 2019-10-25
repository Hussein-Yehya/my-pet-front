import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import { INFO, EDIT } from '../../helpers/urls';
import { PetInterface } from '../../Interfaces/Pets/index.interface';
import SvgLoader from 'components/SvgLoader';

interface Props extends PetInterface {
  hasEdit?: boolean;
}

const PetItem = ({ name, age, breed, urlImage, id, hasEdit }: Props) => {
  const componentClassName = 'contact-item';

  const handleAge = (): string => `ano${Number(age) > 1 ? 's' : ''}`;

  return (
    <div className={`${componentClassName} card mb-4 `}>
      <Link to={`${INFO}/${id}`}>
        <img src={urlImage} alt="" className={`${componentClassName}__image`} />
      </Link>

      <div className="card-body">
        <p className="card-text">
          <span className={`${componentClassName}__box`}>
            <b>Nome:</b>
            <span className={`${componentClassName}__text`}>{name}</span>
          </span>

          <span style={{ color: 'var(--text-color)', margin: '0 20px' }}>
            |
          </span>

          <span className={`${componentClassName}__box`}>
            <span
              className={`${componentClassName}__text`}
              style={{ marginRight: 3 }}
            >
              {age}
            </span>
            {handleAge()}
          </span>
        </p>

        <p className="card-text">
          <span className={`${componentClassName}__box`}>
            <b> Raça: </b>
            <span className={`${componentClassName}__text`}>{breed}</span>
          </span>
        </p>

        {hasEdit ? (
          <Link to={`${EDIT}/${id}`} className={`${componentClassName}__link`}>
            <SvgLoader
              name="edit"
              width={16}
              className={`${componentClassName}__icon`}
            />
            <span>Editar</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default PetItem;
