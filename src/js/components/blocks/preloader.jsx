import React from 'react';
import '../../../img/refresh-icon.png';

const Preloader = () => {
  return (
    <main className="page-main outer-wrapper">
      <div className="preloader">
        <div className="preloader__loader">
          <img src="img/refresh-icon.png" alt="иконка загрузки" />
        </div>
      </div>
    </main>
  );
}

export { Preloader };
