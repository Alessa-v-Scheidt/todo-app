import { openModalCallback } from '../components/molecules/modal/modal';
import { renderTodos } from '../components/organisms/Todos/todos';
import { editSubmitParams } from './editSubmitParams';
import { getTodosFromMyStorage, updateStorage } from './local-storage';
import { Todo } from './Todo';

const todos: Todo[] = getTodosFromMyStorage();

export const submitEditedTodo = ({ todoId, input }: editSubmitParams) => {
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
  const addButton = document.getElementById('open-modal');

  addButton?.addEventListener('click', openModalCallback);
};
