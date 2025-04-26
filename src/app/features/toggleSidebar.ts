export const toggleSidebar = (button: HTMLImageElement, menu: HTMLElement) => {
  button.addEventListener('click', () => {
    menu.classList.toggle('toggle-show');
    if (menu.classList.contains('toggle-show')) {
      button.src = '/assets/sidebar/open.svg';
    } else {
      button.src = '/assets/sidebar/close.svg';
    }
  });
};
