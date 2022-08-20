import { generateButton } from '../../atoms/button/button';
import { openModalCallback } from '../modal/modal';
import plus from '../../../icons/plus.svg';

export const renderAddButton = () => {
  const body = document.querySelector('body');
  const plusImage = document.createElement('img');
  plusImage.src = plus;

  const addButton = generateButton({
    content: plusImage,
    onClick: () => openModalCallback(),
    cssClasses: ['button', 'button--rounded', 'button--border', 'button__image', 'button__image--padding'],
  });

  body?.appendChild(addButton);
};
