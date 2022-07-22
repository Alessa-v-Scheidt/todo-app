import { getTodosFromMyStorage, updateStorage } from './local-storage';
import { Todo } from './Todo';

const todos: Todo[] = getTodosFromMyStorage();

export const submitEditedTodo = (todoId: string, input: HTMLInputElement, next: Function) => {
  if (input.parentElement?.dataset.state !== 'active') return;

  const todoToEdit = todos.find((todo) => todo.id === todoId);

  if (!todoToEdit || input.value === '') return;

  todoToEdit.task = input.value;

  updateStorage(todos);
  next(todos);
};

export const toggleEditInput = (editElement: HTMLElement) => {
  const editRef = editElement;

  if (editRef?.style.display === 'none') {
    editRef.style.display = 'block';
    editRef.dataset.state = 'active';
  } else {
    editRef.style.display = 'none';
    editRef.dataset.state = '';
  }
};
