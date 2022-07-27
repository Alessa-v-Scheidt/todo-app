import { Todo } from '../../../helpers/Todo';
import { validateId } from '../../../helpers/id-helper';
import { getTodosFromMyStorage, updateStorage } from '../../../helpers/local-storage';
import todoContainer from './todo.config';
import { generateListElement } from '../../molecules/listElement';
import { toggleEditInput, submitEditedTodo } from '../../../helpers/button-callback';

const container = todoContainer;
const todos: Todo[] = getTodosFromMyStorage();

const deleteTodo = (id: string, next: Function) => {
  const deleteIndex = todos.findIndex((todoToDelete) => todoToDelete.id === id);
  todos.splice(deleteIndex, 1);
  updateStorage(todos);
  next(todos);
};

// Render todo list
export const renderTodos = (todosToRender: Todo[]) => {
  if (!container) return;
  container.textContent = '';

  todosToRender.forEach((todo) => {
    const newListElement = generateListElement({
      text: todo.task,
      editCallback: toggleEditInput,
      deleteCallback: () => deleteTodo(todo.id, renderTodos),
      editSubmitCallback:
        (inputElement: HTMLInputElement) => submitEditedTodo(todo.id, inputElement, renderTodos),
    });

    container?.appendChild(newListElement);
  });
};

export const addTodo = (task: string) => {
  todos.push({
    task,
    id: validateId(),
  });

  updateStorage(todos);
  renderTodos(todos);
};
