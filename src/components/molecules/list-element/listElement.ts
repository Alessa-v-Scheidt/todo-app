import { ListElementParams } from './ListElementParams';
import { generateButton } from '../../atoms/button/button';
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

  const pencilImage = document.createElement('img');
  pencilImage.src = pencil;
  const editButton = generateButton({
    content: pencilImage,
    onClick: () => editCallback(editElement),
  });
  const trashcanImage = document.createElement('img');
  trashcanImage.src = trashcan;
  const deleteButton = generateButton({
    content: trashcanImage,
    onClick: deleteCallback,
  });
  const buttonContainer = document.createElement('div');

  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);

  elementContainer.appendChild(todoTask);
  elementContainer.appendChild(buttonContainer);

  newListElement.appendChild(elementContainer);
  newListElement.appendChild(editElement);

  newListElement.setAttribute('draggable', 'true');

  return newListElement;
};
