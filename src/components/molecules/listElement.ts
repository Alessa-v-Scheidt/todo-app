import { ListElementParams } from '../../helpers/ListElementParams';
import { generateButton } from '../atoms/button';
import { generateEditElement } from './editElement';

export const generateListElement = ({
  todoText,
  editCallback,
  deleteCallback,
  editSubmitCallback,
}: ListElementParams) => {
  const newListElement = document.createElement('div');
  const todoTask = document.createElement('span');
  todoTask.textContent = todoText;
  const editElement = generateEditElement(editSubmitCallback);
  const editButton = generateButton({
    text: 'edit',
    callback: () => editCallback(editElement),
  });
  const deleteButton = generateButton({
    text: 'delete',
    callback: deleteCallback,
  });

  newListElement.appendChild(todoTask);
  newListElement.appendChild(editButton);
  newListElement.appendChild(deleteButton);
  newListElement.appendChild(editElement);

  return newListElement;
};
