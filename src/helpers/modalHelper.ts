import { renderAddButton } from '../components/molecules/add-button/add-button';
import { generateModal } from '../components/molecules/modal/modal';

export const renderModal = () => {
  generateModal();

  renderAddButton();
};
