import { FechDataDescription } from '../../types';

export const displayMainData = (data: FechDataDescription) => {
  const mainImage = document.querySelector<HTMLImageElement>('.project-main-img');
  const mainTitle = document.querySelector<HTMLElement>('.project-title');
  const mainSubtitle = document.querySelector<HTMLElement>('.project-subtitle');
  const mainDate = document.querySelector<HTMLElement>('.project-date');
  const mainText = document.querySelector<HTMLElement>('.project-textcontent');

  if (mainImage && mainText && mainDate && mainSubtitle && mainTitle) {
    mainImage.setAttribute('src', data.image);
    mainTitle.textContent = data.name;
    mainSubtitle.textContent = data.description;
    mainDate.textContent = `Completed on ${data.completed_on}`;
    mainText.textContent = data.content;
  }
};
