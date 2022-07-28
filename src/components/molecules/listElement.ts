import { ListElementParams } from '../../helpers/ListElementParams';
import { generateButton } from '../atoms/button';
import { generateEditElement } from './editElement';

export const generateListElement = ({
  text,
  editCallback,
  deleteCallback,
  editSubmitCallback,
}: ListElementParams) => {
  const newListElement = document.createElement('li');
  const todoTask = document.createElement('span');
  todoTask.textContent = text;
  const editElement = generateEditElement(editSubmitCallback);
  const editButton = generateButton({
    text: 'edit',
    onClick: () => editCallback(editElement),
  });
  const deleteButton = generateButton({
    text: 'delete',
    onClick: deleteCallback,
  });

  newListElement.appendChild(todoTask);
  newListElement.appendChild(editButton);
  newListElement.appendChild(deleteButton);
  newListElement.appendChild(editElement);

  return newListElement;
};
