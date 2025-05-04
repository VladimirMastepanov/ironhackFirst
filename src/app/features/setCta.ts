import { PATH_TO_MAIL_ICON } from '../../constants';
import { cta } from '../vidgets/cta';

export const setCta = () => {
  const ctaElement = document.querySelector<HTMLElement>('.cta');
  if (ctaElement) ctaElement.innerHTML = cta;
  const img = document.querySelector<HTMLImageElement>('.cta-mail-icon');
  if (img) img.src = PATH_TO_MAIL_ICON;
};
