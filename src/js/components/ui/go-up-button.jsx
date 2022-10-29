import React from 'react';
import { buttonScrollUpHandler } from '../../handlers/handlers';

const GoUpButton = () => {
  return (
    <>
      <button
        onClick={buttonScrollUpHandler}
        className="page-footer__button-up"
        type="button">
        ↑</button>
    </>
  );
}

export { GoUpButton };
