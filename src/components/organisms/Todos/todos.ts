import { Todo } from '../../../helpers/Todo';
import validateId from '../../../helpers/id-helper';
import { getTodosFromMyStorage, updateStorage } from '../../../helpers/local-storage';
import todoContainer from './todo.config';
import { generateListElement } from '../../molecules/listElement';

const container = todoContainer;
const todos: Todo[] = getTodosFromMyStorage();

const deleteTodo = (id: string, next: Function) => {
  const deleteIndex = todos.findIndex((todoToDelete) => todoToDelete.id === id);
  todos.splice(deleteIndex, 1);
  updateStorage(todos);
  next(todos);
};

const submitEditedTodo = (todoId: string, input: HTMLInputElement, next: Function) => {
  const todoToEdit = todos.find((todo) => todo.id === todoId);

  if (!todoToEdit || input.value === '') return;

  todoToEdit.task = input.value;

  updateStorage(todos);
  next(todos);
};

const openEditInput = (editElement: HTMLElement) => {
  const editRef = editElement;

  if (editRef?.style.display === 'none') {
    editRef.style.display = 'block';
  } else {
    editRef.style.display = 'none';
  }
};

// Render todo list
export const renderTodos = (todosToRender: Todo[]) => {
  if (!container) return;
  container.textContent = '';

  todosToRender.forEach((todo) => {
    const newListElement = generateListElement(
      todo.task,
      openEditInput,
      () => deleteTodo(todo.id, renderTodos),
      (inputElement: HTMLInputElement) => submitEditedTodo(todo.id, inputElement, renderTodos),
    );

    container?.appendChild(newListElement);
  });
};

export const addTodo = (task: string) => {
  todos.push({
    task,
    id: validateId(todos),
  });

  updateStorage(todos);
  renderTodos(todos);
};
