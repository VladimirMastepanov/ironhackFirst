import { NUMBER_PROJECRS_FOR_DISPLAY } from '../../../constants';
import { displayCardData } from '../../features/displayCardData';
import { displayMainData } from '../../features/displayMainData';
import { getData } from '../../features/getData';
import { getRandomProjects } from '../../features/getRandomeProjects';
import { toggleSidebar } from '../../features/toggleSidebar';
import { toUp } from '../../features/toUp';

const upButton = document.querySelector<HTMLImageElement>('.up');
const sidebarButton = document.querySelector<HTMLImageElement>('.toggle-icon');
const sidabar = document.querySelector<HTMLElement>('.toggle-block');

window.addEventListener('load', async () => {
  try {
    const data = await getData();
    console.log(data);
    if (data) {
      const currentProgectId = localStorage.getItem('currentProject');
      if (!currentProgectId) {
        const [first, ...rest] = data;
        console.log(first);
        displayMainData(first);
        displayCardData(rest);
      } else {
        const [currentProgect] = data.filter((el) => el.uuid === currentProgectId);
        console.log(currentProgect);
        const filtredData = data.filter((el) => el.uuid !== currentProgectId);
        const randomProjects = getRandomProjects(NUMBER_PROJECRS_FOR_DISPLAY, filtredData);
        displayMainData(currentProgect);
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

if (upButton && sidabar && sidebarButton) {
  toUp(upButton);
  toggleSidebar(sidebarButton, sidabar);
}
