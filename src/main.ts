import { displayCardData } from './app/features/displayCardData';
import { getCta } from './app/features/getCta';
import { getData } from './app/features/getData';
import { getFooter } from './app/features/getFooter';
import { getNavigation } from './app/features/getNavigation';
import { getProjectsCards } from './app/features/getProjectsCard';
import { toUp } from './app/features/toUp';

window.addEventListener('load', async () => {
  getNavigation();
  const activeLink = document.querySelectorAll<HTMLLinkElement>('.home-link');
  activeLink.forEach((el) => el.classList.add('active-link'));
  getFooter();
  toUp();
  getProjectsCards();
  getCta();

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
