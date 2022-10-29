import React from 'react';

const BurgerButton = ({ visible, setVisible }) => {
  return (
    <button
      onClick={setVisible}
      className={
        visible ? "burger burger--closed" : "burger burger--opened"
      }
      type="button">
      <span className="visually-hidden">меню</span>
    </button>
  );
}
export { BurgerButton };
