import React, { useEffect } from 'react';
import { closeModalKeyHandler, closeModalMouseHandler } from '../../handlers/handlers';


const ImgModal = ({ setActive, src }) => {

  const closeModalWindowKey = (evt) => {
    closeModalKeyHandler(evt);
    setActive(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalWindowKey);

    return () => {
      window.removeEventListener('keydown', closeModalWindowKey);
    }
  }, [])

  return (
    <div className="modal" onClick={() => closeModalMouseHandler(setActive(false))}>
      <img className="modal__img" src={src} width="300" alt="still" onClick={(e) => e.stopPropagation()} />
      <button
        className="modal__close-button"
        onClick={() => closeModalMouseHandler(setActive(false))}>
        ×</button>
    </div>
  );
}
export { ImgModal };
