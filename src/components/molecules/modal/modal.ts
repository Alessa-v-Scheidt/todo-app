import './modal.css';
import { addTodo } from '../../organisms/Todos/todos';
import { generateButton } from '../../atoms/button/button';

export const openModalCallback = () => {
  const modal = document.getElementById('modal');
  if (!modal) return;
  modal.style.display = 'block';
};

export const closeModal = (event: MouseEvent) => {
  const modal = document.getElementById('modal');

  if (modal && event.target === modal) modal.style.display = 'none';
};

export const addNewTodo = () => {
  const text = document.getElementById('new-todo-input') as HTMLInputElement;
  if (text?.value === '') return;

  addTodo(text.value);
  text.value = '';

  const modal = document.getElementById('modal');
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

  newModal.setAttribute('id', 'modal');
  modalInput.setAttribute('id', 'new-todo-input');

  newModal.addEventListener('click', closeModal);

  newModal.classList.add('modal');
  modalContainer.classList.add('modal__container');
  modalInput.classList.add('modal__input');

  modalContainer.appendChild(modalInput);
  modalContainer.appendChild(modalSubmitButton);

  newModal.appendChild(modalContainer);

  document.querySelector('body')?.appendChild(newModal);
};
