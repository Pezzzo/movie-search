import React from 'react';

const SearchByDate = () => {

  return (
    <form className="form">

        <input className="form__input" type="number" name="movie" placeholder="Год" />
        <button
        className="form__button-submit"
        type="submit"
      >найти</button>
        <select className="form__select" name="select">
          <option value="JANUARY">Январь</option>
          <option value="FEBRUARY">Февраль</option>
          <option value="MARCH">Март</option>
          <option value="APRIL">Апрель</option>
          <option value="MAY">Май</option>
          <option value="JUNE">Июнь</option>
          <option value="JULY">Июль</option>
          <option value="AUGUST">Август</option>
          <option value="SEPTEMBER">Сентябрь</option>
          <option value="OCTOBER">Октябрь</option>
          <option value="NOVEMBER">Ноябрь</option>
          <option value="DECEMBER">Декабрь</option>
        </select>


    </form>
  );
}
export { SearchByDate };
