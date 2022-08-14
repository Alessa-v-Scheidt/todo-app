import { Todo } from '../../../helpers/Todo.interface';
import { validateId } from '../../../helpers/idHelper';
import { getTodosFromLocalStorage, updateStorage } from '../../../helpers/localStorage';
import todoContainer from './todo.config';
import { generateListElement } from '../../molecules/list-element/listElement';
import { toggleEditInput, submitEditedTodo } from '../../../helpers/buttonCallback';
import { initDragAndDrop } from '../../../helpers/dragAndDrop';

let todos: Todo[] = [];

const container = todoContainer;

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

export const initTodoList = () => {
  todos = getTodosFromLocalStorage();
  initDragAndDrop<Todo>(todos, (updatedList: Todo[]) => {
    renderTodos(updatedList);
    updateStorage(updatedList);
  });
  renderTodos(todos);
};
