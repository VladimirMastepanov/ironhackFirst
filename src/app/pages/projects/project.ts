import { displayCardData } from '../../features/displayCardData';
import { displayMainData } from '../../features/displayMainData';
import { getData } from '../../features/getData';

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
        displayMainData(currentProgect);
        displayCardData(filtredData);
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
