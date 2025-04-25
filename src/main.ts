import { displayCardData } from './app/features/displayCardData';
import { getData } from './app/features/getData';

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
