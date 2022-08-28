import { generateButton } from '../../atoms/button/button';
import { getModalFunctions } from '../modal/modal';
// import plus from '../../../icons/plus.svg';
import plusIcon from '../../../icons/plusIcon.svg';

export const renderAddButton = () => {
  const page = document.querySelector('#page-container');
  const plusImage = document.createElement('img');
  plusImage.src = plusIcon;

  const { openModalCallback } = getModalFunctions();

  const addButton = generateButton({
    content: plusImage,
    onClick: () => openModalCallback(),
    cssClasses: ['button', 'button--rounded', 'button--border', 'button__image', 'button__image--padding', 'button__image--larger'],
  });

  page?.appendChild(addButton);
};
