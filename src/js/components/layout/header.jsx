import React, { useEffect } from 'react';
import { SearchByTitle } from '../blocks/search-by-title';
import { Nav } from './nav';
import '../../../img/logo.png';
import { useToggle } from '../../hooks/useToggle';
import { BurgerButton } from '../ui/burger-button';
import { useParams } from 'react-router-dom';

const Header = () => {

  const [visible, setVisible] = useToggle(false);
  const params = useParams();

  useEffect(() => {
    if (!visible) {
      setVisible()
    }
  }, [params.id])

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <img className="page-header__logo" src="img/logo.png" alt="логотип" />
        <Nav visible={visible} />
        <SearchByTitle visible={visible} />
      </div>
      <BurgerButton visible={visible} setVisible={setVisible} />
    </header>
  );
}

export { Header };
