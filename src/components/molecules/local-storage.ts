import { Todo } from '../atoms/Todo';

const storageKey = 'todo-app.todos';

export const updateStorage = (todos: Todo[]) => {
  localStorage.setItem(storageKey, JSON.stringify(todos));
};

export const getTodosFromMyStorage = (): Todo[] => {
  const oldTodoString = localStorage.getItem(storageKey);

  if (!oldTodoString) return [];

  const oldTodos = JSON.parse(oldTodoString);
  return oldTodos;
};
