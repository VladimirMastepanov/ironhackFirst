import { displayCardData } from './app/features/displayCardData';
import { getData } from './app/features/getData';
import { toggleSidebar } from './app/features/toggleSidebar';
import { toUp } from './app/features/toUp';

const upButton = document.querySelector<HTMLImageElement>('.up');
const sidebarButton = document.querySelector<HTMLImageElement>('.toggle-icon');
const sidabar = document.querySelector<HTMLElement>('.toggle-block');

window.addEventListener('load', async () => {
  try {
    const data = await getData();
    displayCardData(data);

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        localStorage.setItem('currentProject', card.id);
        window.location.href = 'projects/1.html';
      });
    });
  } catch (err) {
    console.log('Loading data error:', err);
  }
});

if (upButton && sidabar && sidebarButton) {
  toUp(upButton);
  toggleSidebar(sidebarButton, sidabar);
}
