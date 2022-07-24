import { addNewTodo, closeModal, openModalCallback } from '../../helpers/modal';

export const init = () => {
  const addButton = document.getElementById('openModal');
  addButton?.addEventListener('click', openModalCallback);

  document.getElementById('modal')?.addEventListener('click', closeModal);

  document.getElementById('modal-submit')?.addEventListener('click', addNewTodo);
};
