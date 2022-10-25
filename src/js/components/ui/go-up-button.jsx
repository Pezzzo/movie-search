import React from 'react';
import { scrollUp } from '../../util/util';

const GoUpButton = () => {
  return (
    <>
      <button
        onClick={scrollUp}
        className="page-footer__button-up"
        type="button">
        ↑</button>
    </>
  );
}

export { GoUpButton };
