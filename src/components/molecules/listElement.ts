import { generateButton } from '../atoms/button';
import { generateEditElement } from './editElement';

export const generateListElement = (
  todoText: string,
  editCallback: Function,
  deleteCallback: () => void,
  editSubmitCallback: Function,
) => {
  const newListElement = document.createElement('div');
  const todoTask = document.createElement('span');
  todoTask.textContent = todoText;
  const editElement = generateEditElement(editSubmitCallback);
  const editButton = generateButton('edit', () => editCallback(editElement));
  const deleteButton = generateButton('delete', deleteCallback);

  newListElement.appendChild(todoTask);
  newListElement.appendChild(editButton);
  newListElement.appendChild(deleteButton);
  newListElement.appendChild(editElement);

  return newListElement;
};
