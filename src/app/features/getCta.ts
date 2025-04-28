import { PATH_TO_MAIL_ICON } from '../../constants';
import { cta } from '../vidgets/cta';
import { getBasePath } from './getBasePath';

const base = getBasePath();

export const getCta = () => {
  const ctaElement = document.querySelector<HTMLElement>('.cta');
  if (ctaElement) ctaElement.innerHTML = cta;
  const img = document.querySelector<HTMLImageElement>('.cta-mail-icon');
  if (img) img.src = `${base}${PATH_TO_MAIL_ICON}`;
};
