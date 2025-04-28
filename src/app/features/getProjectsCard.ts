import { PATH_TO_PROJECTS } from '../../constants';
import { progectCardaElement } from '../vidgets/projectsCards';

export const getProjectsCards = () => {
  const cardsConteiner = document.querySelector<HTMLElement>('.projects-cards');

  if (cardsConteiner) cardsConteiner.innerHTML = progectCardaElement;

  const links = document.querySelectorAll<HTMLLinkElement>('.project-link');
  links.forEach((el) => (el.href = PATH_TO_PROJECTS));
};
