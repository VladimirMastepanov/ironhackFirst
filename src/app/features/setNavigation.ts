import {
  PATH_TO_CONTACT,
  PATH_TO_HOME,
  PATH_TO_LOGO,
  PATH_TO_PROJECTS,
  PATH_TO_SERVISES,
  PATH_TO_SIDEBAR_BUTTON_CLOSE,
  PATH_TO_SIDEBAR_BUTTON_OPEN,
} from '../../constants';
import { navbarAside } from '../vidgets/navbarAside';
import { navbarMain } from '../vidgets/nawbarMain';

export const setNavigation = () => {
  const headerElement = document.getElementById('header');
  const asideElement = document.getElementById('aside');
  if (headerElement) headerElement.innerHTML = navbarMain;
  if (asideElement) asideElement.innerHTML = navbarAside;

  const headerLogo = document.querySelector<HTMLImageElement>('.header-container-logo');
  if (headerLogo) headerLogo.src = PATH_TO_LOGO;

  const homeLink = document.querySelectorAll<HTMLLinkElement>('.home-link');
  homeLink.forEach((el) => (el.href = PATH_TO_HOME));
  const projectsLink = document.querySelectorAll<HTMLLinkElement>('.projects-link');
  projectsLink.forEach((el) => (el.href = PATH_TO_PROJECTS));
  const servicesLink = document.querySelectorAll<HTMLLinkElement>('.services-link');
  servicesLink.forEach((el) => (el.href = PATH_TO_SERVISES));

  const contactButton = document.querySelector<HTMLButtonElement>('.contact-us');
  contactButton?.addEventListener('click', () => {
    window.location.href = PATH_TO_CONTACT;
  });

  const sidebarButton = document.querySelector<HTMLImageElement>('.toggle-icon');
  const sidabar = document.querySelector<HTMLElement>('.toggle-block');
  if (sidebarButton && sidabar) {
    sidebarButton.src = PATH_TO_SIDEBAR_BUTTON_CLOSE;
    sidebarButton.addEventListener('click', () => {
      sidabar.classList.toggle('toggle-show');
      if (sidabar.classList.contains('toggle-show')) {
        sidebarButton.src = PATH_TO_SIDEBAR_BUTTON_OPEN;
      } else {
        sidebarButton.src = PATH_TO_SIDEBAR_BUTTON_CLOSE;
      }
    });
  }
};
