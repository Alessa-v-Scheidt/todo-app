import './modal.css';
import { addTodo } from '../../organisms/todos/todos';
import { generateButton } from '../../atoms/button/button';

let modal: HTMLElement | undefined;

export const openModalCallback = () => {
  if (!modal) return;
  modal.style.display = 'block';
};

const closeModal = (event: MouseEvent) => {
  if (modal && event.target === modal) modal.style.display = 'none';
};

const addNewTodo = () => {
  const text = document.getElementById('new-todo-input') as HTMLInputElement;
  if (text?.value === '') return;

  addTodo(text.value);
  text.value = '';

  if (!modal) return;
  modal.style.display = 'none';
};

export const generateModal = () => {
  const newModal = document.createElement('div');
  const modalContainer = document.createElement('div');
  const modalInput = document.createElement('input');
  const modalSubmitButton = generateButton({
    content: 'Add',
    onClick: () => addNewTodo(),
    cssClasses: ['modal__button', 'modal__button--border'],
  });

  modalInput.setAttribute('id', 'new-todo-input');

  newModal.addEventListener('click', closeModal);

  newModal.classList.add('modal');
  modalContainer.classList.add('modal__container');
  modalInput.classList.add('modal__input');

  modalContainer.appendChild(modalInput);
  modalContainer.appendChild(modalSubmitButton);

  newModal.appendChild(modalContainer);

  document.querySelector('body')?.appendChild(newModal);
  modal = newModal;
};
