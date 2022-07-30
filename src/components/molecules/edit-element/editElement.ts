import { generateIconButton } from '../../atoms/button/button';
import checkmark from '../../../icons/checkmark.svg';

export const generateEditElement = (editSubmitCallback: Function) => {
  const newEditElement = document.createElement('div');
  const editInput = document.createElement('input');
  const editSubmitButton = generateIconButton({
    src: checkmark,
    onClick: () => editSubmitCallback(editInput),
  });

  // damit Element standardmäßig hidden ist
  newEditElement.style.display = 'none';

  newEditElement.appendChild(editInput);
  newEditElement.appendChild(editSubmitButton);

  return newEditElement;
};
