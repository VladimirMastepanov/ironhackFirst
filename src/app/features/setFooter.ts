import { PATH_TO_LOGO } from '../../constants';
import { footer } from '../vidgets/footer';

export const setFooter = () => {
  const footerElement = document.getElementById('footer');
  if (footerElement) footerElement.innerHTML = footer;
  const footerImg = document.querySelector<HTMLImageElement>('.footer-img');
  if (footerImg) footerImg.src = PATH_TO_LOGO;
};
