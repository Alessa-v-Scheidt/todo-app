import './button.css';
import { AsyncButtonParams, ButtonParams } from './interface/Button.interface';

export const generateButton = ({ content, onClick, cssClasses = [] }: ButtonParams) => {
  const newButton = document.createElement('button');
  newButton.append(content);
  if (cssClasses) newButton.classList.add(...cssClasses);
  newButton.addEventListener('click', onClick);

  return newButton;
};

export const generateAsyncButton = <T>({ content, onClick, cssClasses = [] }
: AsyncButtonParams<T>) => {
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
