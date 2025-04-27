import { FechDataDescription } from '../../types';

export const displayCardData = (data: FechDataDescription[]) => {
  const cards = document.querySelectorAll<HTMLElement>('.project-card');

  cards.forEach((card, index) => {
    card.setAttribute('id', data[index].uuid);
    const cardImage = card.querySelector<HTMLImageElement>('.project-card-img');
    const cardTitle = card.querySelector<HTMLElement>('.projects-p-title');
    const cardText = card.querySelector<HTMLElement>('.projects-p-text');

    if (cardImage && cardTitle && cardText) {
      cardImage.setAttribute('src', data[index].image);
      cardTitle.textContent = data[index].name;
      cardText.textContent = data[index].description;
    }
  });
};
