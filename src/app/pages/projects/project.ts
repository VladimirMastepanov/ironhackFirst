import { NUMBER_PROJECRS_FOR_DISPLAY } from '../../../constants';
import { displayCardData } from '../../features/displayCardData';
import { displayMainData } from '../../features/displayMainData';
import { getCta } from '../../features/getCta';
import { getData } from '../../features/getData';
import { getFooter } from '../../features/getFooter';
import { getNavigation } from '../../features/getNavigation';
import { getProjectsCards } from '../../features/getProjectsCard';
import { getRandomProjects } from '../../features/getRandomeProjects';
import { toUp } from '../../features/toUp';

window.addEventListener('load', async () => {
  getNavigation();
  const activeLink = document.querySelectorAll<HTMLLinkElement>('.projects-link');
  activeLink.forEach((el) => el.classList.add('active-link'));
  getProjectsCards();
  getCta();
  getFooter();
  toUp();
  try {
    const data = await getData();
    if (data) {
      const currentProgectId = localStorage.getItem('currentProject');
      if (!currentProgectId) {
        const [first, ...rest] = data;
        displayMainData(first);
        displayCardData(rest);
      } else {
        const currentProgect = data.find((el) => el.uuid === currentProgectId);
        const filtredData = data.filter((el) => el.uuid !== currentProgectId);
        const randomProjects = getRandomProjects(NUMBER_PROJECRS_FOR_DISPLAY, filtredData);
        if (currentProgect) displayMainData(currentProgect);
        displayCardData(randomProjects);
      }

      const cards = document.querySelectorAll('.project-card');
      cards.forEach((card) => {
        card.addEventListener('click', () => {
          localStorage.setItem('currentProject', card.id);
        });
      });
    }
  } catch (err) {
    console.log('Loading data error:', err);
  }
});
