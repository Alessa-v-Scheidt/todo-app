import { generateButton } from '../../atoms/button/button';
import { openModalCallback } from '../modal/modal';
// import plus from '../../../icons/plus.svg';
import plusIcon from '../../../icons/plusIcon.svg';

export const renderAddButton = () => {
  const body = document.querySelector('body');
  const plusImage = document.createElement('img');
  plusImage.src = plusIcon;

  const addButton = generateButton({
    content: plusImage,
    onClick: () => openModalCallback(),
    cssClasses: ['button', 'button--rounded', 'button--border', 'button__image', 'button__image--padding', 'button__image--larger'],
  });

  body?.appendChild(addButton);
};
