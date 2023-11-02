import Navigation from 'components/Navigation/Navigation';
import React, { Suspense } from 'react';

const SharedLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>
        <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
