export const toUp = () => {
  const button = document.querySelector<HTMLImageElement>('.up');
  if (button) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        button.classList.add('up-show');
      } else {
        button.classList.remove('up-show');
      }
    });
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
};
