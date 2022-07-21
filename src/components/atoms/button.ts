import { ButtonParams } from '../../helpers/ButtonParams';

export const generateButton = ({ text, callback }: ButtonParams) => {
  const newButton = document.createElement('button');
  newButton.textContent = text;
  newButton.addEventListener('click', callback);

  return newButton;
};
