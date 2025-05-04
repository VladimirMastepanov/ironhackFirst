import { NUMBER_PROJECRS_FOR_DISPLAY } from '../../../constants';
import { displayCardData } from '../../features/displayCardData';
import { displayMainData } from '../../features/displayMainData';
import { setCta } from '../../features/setCta';
import { getData } from '../../features/getData';
import { setFooter } from '../../features/setFooter';
import { setNavigation } from '../../features/setNavigation';
import { setProjectsCards } from '../../features/setProjectsCard';
import { getRandomProjects } from '../../features/getRandomeProjects';
import { toUp } from '../../features/toUp';

window.addEventListener('load', async () => {
  setNavigation();
  const activeLink = document.querySelectorAll<HTMLLinkElement>('.projects-link');
  activeLink.forEach((el) => el.classList.add('active-link'));
  setProjectsCards();
  setCta();
  setFooter();
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
