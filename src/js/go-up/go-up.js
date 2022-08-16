import { scrollUp } from '../util/util.js';

const buttonUp = document.querySelector('.page-main__button-up');

const goUp = () => {

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      buttonUp.classList.remove('display-none');
    } else {
      buttonUp.classList.add('display-none');
    }
  });
  buttonUp.addEventListener('click', scrollUp);
};

export { goUp };
