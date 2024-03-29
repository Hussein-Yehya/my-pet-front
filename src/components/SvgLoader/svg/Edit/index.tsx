import React from 'react';
import { SVGLoaderIconInterface } from 'components/SvgLoader/index.interface';

const componentClassName = 'c-edit-icon';

const EditIcon = ({
  width = '24',
  height = '24',
  className = ''
}: SVGLoaderIconInterface) => (
  <svg
    className={`${componentClassName} ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-labelledby="title"
  >
    <path d="M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z" />
  </svg>
);

export default EditIcon;
