import React, { Suspense, lazy } from 'react';

function LazyImport(Component: any) {
  const ComponentLoadable = lazy(Component);

  return (props: any) => (
    <Suspense fallback={<div>Loading...</div>}>
      <ComponentLoadable {...props} />
    </Suspense>
  );
}

export default LazyImport;
