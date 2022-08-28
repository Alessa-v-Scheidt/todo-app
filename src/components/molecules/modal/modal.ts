import './modal.css';
import { addTodo } from '../../organisms/todos/todos';
import { generateButton } from '../../atoms/button/button';

export const getModalFunctions = () => {
  const modal = document.createElement('div');

  const openModal = () => {
    modal.style.display = 'block';
  };

  const closeModal = (event: MouseEvent) => {
    if (event.target === modal) modal.style.display = 'none';
  };

  const addNewTodo = () => {
    const text = document.getElementById('new-todo-input') as HTMLInputElement;
    if (text?.value === '') return;

    addTodo(text.value);
    text.value = '';

    modal.style.display = 'none';
  };

  const generateModal = () => {
    const modalContainer = document.createElement('div');
    const modalInput = document.createElement('input');
    const modalSubmitButton = generateButton({
      content: 'Add',
      onClick: () => addNewTodo(),
      cssClasses: ['modal__button', 'modal__button--border'],
    });

    modalInput.setAttribute('id', 'new-todo-input');

    modal.addEventListener('click', closeModal);

    modal.classList.add('modal');
    modalContainer.classList.add('modal__container');
    modalInput.classList.add('modal__input');

    modalContainer.appendChild(modalInput);
    modalContainer.appendChild(modalSubmitButton);

    modal.appendChild(modalContainer);

    document.querySelector('#page-container')?.appendChild(modal);
  };

  generateModal();

  return { openModalCallback: openModal };
};
