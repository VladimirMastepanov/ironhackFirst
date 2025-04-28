import { PATH_TO_LOGO } from '../../constants';
import { footer } from '../vidgets/footer';
import { getBasePath } from './getBasePath';

const base = getBasePath();

export const getFooter = () => {
  const footerElement = document.getElementById('footer');
  if (footerElement) footerElement.innerHTML = footer;
  const footerImg = document.querySelector<HTMLImageElement>('.footer-img');
  if (footerImg) footerImg.src = `${base}${PATH_TO_LOGO}`;
};
