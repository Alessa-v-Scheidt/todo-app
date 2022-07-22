import { getTodosFromMyStorage, updateStorage } from './local-storage';
import { Todo } from './Todo';

const todos: Todo[] = getTodosFromMyStorage();

export const submitEditedTodo = (todoId: string, input: HTMLInputElement, next: Function) => {
  const todoToEdit = todos.find((todo) => todo.id === todoId);

  if (!todoToEdit || input.value === '') return;

  todoToEdit.task = input.value;

  updateStorage(todos);
  next(todos);
};

export const openEditInput = (editElement: HTMLElement) => {
  const editRef = editElement;

  if (editRef?.style.display === 'none') {
    editRef.style.display = 'block';
  } else {
    editRef.style.display = 'none';
  }
};
