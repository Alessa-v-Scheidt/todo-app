import './button.css';
import { AsyncButtonParams, ButtonParams } from './ButtonParams';

export const generateButton = ({ content, onClick, cssClasses = [] }: ButtonParams) => {
  const newButton = document.createElement('button');
  newButton.append(content);
  if (cssClasses) newButton.classList.add(...cssClasses);
  newButton.addEventListener('click', onClick);

  return newButton;
};

export const generateAsyncButton = ({ content, onClick, cssClasses = [] }: AsyncButtonParams) => {
  const newButton = document.createElement('button');
  newButton.append(content);
  if (cssClasses) newButton.classList.add(...cssClasses);
  newButton.addEventListener('click', async () => {
    newButton.disabled = true;
    await onClick();
    newButton.disabled = false;
  });

  return newButton;
};
