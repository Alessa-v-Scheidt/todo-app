import { Todo } from '../interfaces/Todo.interface';

const storageKey = 'todo-app.todos';

export const updateStorage = (todos: Todo[]) => {
  localStorage.setItem(storageKey, JSON.stringify(todos));
};

export const getTodosFromLocalStorage = (): Todo[] => {
  const oldTodoString = localStorage.getItem(storageKey);

  if (!oldTodoString) return [];

  const oldTodos = JSON.parse(oldTodoString);
  return oldTodos;
};
