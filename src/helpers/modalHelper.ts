import { renderAddButton } from '../components/molecules/add-button/addButton';
import { generateModal } from '../components/molecules/modal/modal';

export const renderModal = () => {
  generateModal();

  renderAddButton();
};
