// очистка элемента
const cleansingElement = (el) => {
  el.innerHTML = '';
};
// автоматический скрол наверх
const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export {cleansingElement, scrollUp};
