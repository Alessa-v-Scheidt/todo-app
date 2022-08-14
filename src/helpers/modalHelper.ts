import { generateModal } from '../components/molecules/modal/modal';
import { renderAddButton } from './buttonCallback';

export const renderModal = () => {
  generateModal();

  renderAddButton();
};
