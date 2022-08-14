import { generateButton } from '../components/atoms/button/button';
import { openModalCallback } from '../components/molecules/modal/modal';
import { renderTodos } from '../components/organisms/Todos/todos';
import { EditSubmitParams } from './EditSubmitParams.interface';
import { getTodosFromLocalStorage, updateStorage } from './localStorage';
import { Todo } from './Todo.interface';
import plus from '../icons/plus.svg';

const todos: Todo[] = getTodosFromLocalStorage();

export const submitEditedTodo = ({ todoId, input }: EditSubmitParams) => {
  if (input.parentElement?.dataset.state !== 'active') return;

  const todoToEdit = todos.find((todo) => todo.id === todoId);

  if (!todoToEdit || input.value === '') return;

  todoToEdit.task = input.value;

  updateStorage(todos);
  renderTodos(todos);
};

export const toggleEditInput = (editElement: HTMLElement) => {
  const editRef = editElement;

  if (editRef?.style.display === 'none') {
    editRef.style.display = 'flex';
    editRef.dataset.state = 'active';
  } else {
    editRef.style.display = 'none';
    editRef.dataset.state = '';
  }
};

export const renderAddButton = () => {
  const body = document.querySelector('body');
  const plusImage = document.createElement('img');
  plusImage.src = plus;

  const addButton = generateButton({
    content: plusImage,
    onClick: () => openModalCallback(),
    cssClasses: ['button', 'button--rounded', 'button--border', 'button__image', 'button__image--padding'],
  });

  body?.appendChild(addButton);
};
