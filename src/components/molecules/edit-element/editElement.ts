import { generateButton } from '../../atoms/button/button';
import checkmark from '../../../icons/checkmark.svg';

export const generateEditElement = (editSubmitCallback: Function) => {
  const newEditElement = document.createElement('div');
  const editInput = document.createElement('input');
  const checkmarkImage = document.createElement('img');
  checkmarkImage.src = checkmark;
  const editSubmitButton = generateButton({
    content: checkmarkImage,
    onClick: () => editSubmitCallback(editInput),
  });

  // damit Element standardmäßig hidden ist
  newEditElement.style.display = 'none';

  newEditElement.appendChild(editInput);
  newEditElement.appendChild(editSubmitButton);

  return newEditElement;
};
