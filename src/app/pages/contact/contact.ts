import { PATH_TO_HOME } from '../../../constants';
import { setFooter } from '../../features/setFooter';
import { setNavigation } from '../../features/setNavigation';

window.addEventListener('load', () => {
  setNavigation();
  setFooter();

  const form = document.querySelector<HTMLElement>('.contact-form');
  const nameInput = document.querySelector<HTMLInputElement>('#name');
  const emailInput = document.querySelector<HTMLInputElement>('#email');
  const phoneInput = document.querySelector<HTMLInputElement>('#phone');
  const messageInput = document.querySelector<HTMLTextAreaElement>('#message');

  const validationNameMessage = document.querySelector<HTMLParagraphElement>('.error-name');
  const repitedNameMessage = document.querySelector<HTMLParagraphElement>('.error-name-repite');
  const validationEmail = document.querySelector<HTMLParagraphElement>('.error-email');
  const validationPhone = document.querySelector<HTMLParagraphElement>('.error-phone');
  const validationMessage = document.querySelector<HTMLParagraphElement>('.error-message');

  const isEmail = (email: string): boolean => {
    return email.includes('@');
  };

  const isNumbers = (phone: string): boolean => {
    const forClean: string[] = [' ', '-', '+'];
    const arr: string[] = phone.split('').filter((el) => !forClean.includes(el));
    return arr.every((el) => !isNaN(Number(el)));
  };

  if (
    form &&
    nameInput &&
    emailInput &&
    phoneInput &&
    messageInput &&
    validationEmail &&
    validationPhone &&
    validationMessage &&
    validationNameMessage &&
    repitedNameMessage
  ) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      [
        validationNameMessage,
        repitedNameMessage,
        validationEmail,
        validationPhone,
        validationMessage,
      ].forEach((el) => (el.hidden = true));

      nameInput.classList.remove('form-error');
      emailInput.classList.remove('form-reminder');
      phoneInput.classList.remove('form-reminder');
      messageInput.classList.remove('form-reminder');

      if (!nameInput.value) {
        nameInput.classList.add('form-error');
        validationNameMessage.hidden = false;
        isValid = false;
      } else if (nameInput.value.toLowerCase() === 'ironhack') {
        nameInput.classList.add('form-error');
        repitedNameMessage.hidden = false;
        isValid = false;
      }
      if (!isEmail(emailInput.value)) {
        emailInput.classList.add('form-reminder');
        console.log(emailInput.classList);
        validationEmail.hidden = false;
        isValid = false;
      }
      if (!isNumbers(phoneInput.value) || phoneInput.value.length < 6) {
        validationPhone.hidden = false;
        phoneInput.classList.add('form-reminder');
        isValid = false;
      }
      if (messageInput.value.length === 0) {
        validationMessage.hidden = false;
        messageInput.classList.add('form-reminder');
        isValid = false;
      }

      if (isValid) {
        window.location.href = PATH_TO_HOME;
      }
    });
  }
});
