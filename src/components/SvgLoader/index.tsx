import React from 'react';

import LazyImport from '../LazyImport';
import { SVGLoaderInterface } from './index.interface';

const EditIcon = LazyImport(() =>
  import('./svg/Edit' /* webpackChunkName: 'edit-icon' */)
);

const SvgLoader = ({
  name,
  width,
  height,
  className = ''
}: SVGLoaderInterface) => {
  switch (name) {
    case 'edit':
      return <EditIcon width={width} height={height} className={className} />;

    default:
      return null;
  }
};

export default SvgLoader;
