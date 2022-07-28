import { ButtonParams } from './ButtonParams';

export const generateButton = ({ text, onClick: callback }: ButtonParams) => {
  const newButton = document.createElement('button');
  newButton.textContent = text;
  newButton.addEventListener('click', callback);

  return newButton;
};
