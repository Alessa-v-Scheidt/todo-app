import { Todo } from '../../../helpers/Todo';
import { validateId } from '../../../helpers/idHelper';
import { updateStorage } from '../../../helpers/localStorage';
import todoContainer from './todo.config';
import { generateListElement } from '../../molecules/list-element/listElement';
import { toggleEditInput, submitEditedTodo } from '../../../helpers/buttonCallback';

const container = todoContainer;
let todos: Todo[];

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
        (inputElement: HTMLInputElement) => submitEditedTodo({
          todoId: todo.id,
          input: inputElement,
        }),
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

export const initTodoList = (todoList: Todo[]) => {
  todos = todoList;
  renderTodos(todos);
};
