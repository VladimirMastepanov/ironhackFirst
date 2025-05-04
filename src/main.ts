import { displayCardData } from './app/features/displayCardData';
import { setCta } from './app/features/setCta';
import { getData } from './app/features/getData';
import { setFooter } from './app/features/setFooter';
import { setNavigation } from './app/features/setNavigation';
import { setProjectsCards } from './app/features/setProjectsCard';
import { toUp } from './app/features/toUp';
import { PATH_TO_PROJECTS } from './constants';

window.addEventListener('load', async () => {
  setNavigation();
  const activeLink = document.querySelectorAll<HTMLLinkElement>('.home-link');
  activeLink.forEach((el) => el.classList.add('active-link'));
  setFooter();
  toUp();
  setProjectsCards();
  setCta();

  try {
    const data = await getData();
    displayCardData(data);

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        localStorage.setItem('currentProject', card.id);
        window.location.href = PATH_TO_PROJECTS;
      });
    });
  } catch (err) {
    console.log('Loading data error:', err);
  }
});
