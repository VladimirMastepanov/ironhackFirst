import { displayCardData } from './app/features/displayCardData';
import { getData } from './app/features/getData';
import { getFooter } from './app/features/getFooter';
import { getNavigation } from './app/features/getNavigation';
import { getProjectsCards } from './app/features/getProjectsCard';
import { toUp } from './app/features/toUp';

window.addEventListener('load', async () => {
  // Navigation
  getNavigation();

  // Footer
  getFooter();
  //Up button
  toUp();

  //Projects cards
  getProjectsCards();

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
