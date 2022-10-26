import React, { useEffect } from 'react';
import { closeModal, closeModalKey } from '../../util/util';

const ImgModal = ({ setActive, src }) => {

  const closeModalKeyHandler = (evt) => {
    closeModalKey(evt);
    setActive(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalKeyHandler);

    return () => {
      window.removeEventListener('keydown', closeModalKeyHandler);
    }
  }, [])

  return (
    <div className="modal" onClick={() => setActive(false)}>
      <img className="modal-popup__img" src={src} width="300" alt="still" onClick={(e) => e.stopPropagation()} />
      <button
        className="modal-popup__close-button"
        onClick={() => closeModal(setActive)}>
        ×</button>
    </div>
  );
}
export { ImgModal };
