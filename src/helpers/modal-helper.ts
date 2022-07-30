import { addNewTodo, closeModal } from '../components/molecules/modal/modal';
import { renderAddButton } from './button-callback';

export const renderModal = () => {
  renderAddButton();

  document.getElementById('modal')?.addEventListener('click', closeModal);

  document.getElementById('modal-submit')?.addEventListener('click', addNewTodo);
};
