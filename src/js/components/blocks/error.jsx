import React from 'react';

const Error = ({ error }) => {
  return (
    <>
     <main className="page-main outer-wrapper">
      <h1 className="error">{error}</h1>
     </main>
    </>
  );
}

export { Error };
