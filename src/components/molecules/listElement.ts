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
  const elementContainer = document.createElement('div');
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

  elementContainer.appendChild(todoTask);
  elementContainer.appendChild(editButton);
  elementContainer.appendChild(deleteButton);

  newListElement.appendChild(elementContainer);
  newListElement.appendChild(editElement);

  return newListElement;
};
