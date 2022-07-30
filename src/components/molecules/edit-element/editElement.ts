import { generateButton } from '../../atoms/button/button';

export const generateEditElement = (editSubmitCallback: Function) => {
  const newEditElement = document.createElement('div');
  const editInput = document.createElement('input');
  const editSubmitButton = generateButton({
    text: 'submit',
    onClick: () => editSubmitCallback(editInput),
  });

  // damit Element standardmäßig hidden ist
  newEditElement.style.display = 'none';

  newEditElement.appendChild(editInput);
  newEditElement.appendChild(editSubmitButton);

  return newEditElement;
};