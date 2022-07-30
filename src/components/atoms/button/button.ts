import { TextButtonParams, IconButtonParams } from './ButtonParams';

export const generateTextButton = ({ text, onClick: callback }: TextButtonParams) => {
  const newButton = document.createElement('button');
  newButton.textContent = text;
  newButton.addEventListener('click', callback);

  return newButton;
};

export const generateIconButton = ({ src, onClick: callback }: IconButtonParams) => {
  const newButton = document.createElement('button');
  const imageElement = document.createElement('img');
  imageElement.src = src;
  newButton.appendChild(imageElement);
  newButton.addEventListener('click', callback);

  return newButton;
};
