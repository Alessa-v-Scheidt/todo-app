import { generateHTMLElement } from '../../helpers/html-helper';
import generateButton from '../atoms/button';

export default (todoText: string, deleteCallback: () => void) => {
  const newListElement = document.createElement('div');
  const todoTask = generateHTMLElement(`<span>${todoText}</span>`);
  const deleteButton = generateButton('delete', deleteCallback);

  newListElement.appendChild(todoTask);
  newListElement.appendChild(deleteButton);

  return newListElement;
};
