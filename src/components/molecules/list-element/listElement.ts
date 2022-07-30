import { ListElementParams } from './ListElementParams';
import { generateIconButton } from '../../atoms/button/button';
import { generateEditElement } from '../edit-element/editElement';
import pencil from '../../../icons/pencil.svg';
import trashcan from '../../../icons/trashcan.svg';

export const generateListElement = ({
  text,
  editCallback,
  deleteCallback,
  editSubmitCallback,
}: ListElementParams) => {
  const newListElement = document.createElement('li');
  const elementContainer = document.createElement('div');
  const todoTask = document.createElement('div');
  todoTask.textContent = text;
  const editElement = generateEditElement(editSubmitCallback);
  const editButton = generateIconButton({
    src: pencil,
    onClick: () => editCallback(editElement),
  });

  const deleteButton = generateIconButton({
    src: trashcan,
    onClick: deleteCallback,
  });
  const buttonContainer = document.createElement('div');
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);

  elementContainer.appendChild(todoTask);
  elementContainer.appendChild(buttonContainer);

  newListElement.appendChild(elementContainer);
  newListElement.appendChild(editElement);

  return newListElement;
};
