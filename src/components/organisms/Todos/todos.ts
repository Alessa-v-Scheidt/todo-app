import { Todo } from '../../../helpers/interfaces/Todo.interface';
import { validateId } from '../../../helpers/idHelper';
import { getTodosFromLocalStorage, updateStorage } from '../../../helpers/local-storage/localStorage';
import { generateListElement } from '../../molecules/list-element/listElement';
import { initDragAndDrop } from '../../../helpers/dragAndDrop';
import { submitEditedTodo, toggleEditInput } from '../../molecules/edit-element/editElement';

let todos: Todo[] = [];

const deleteTodo = (id: string, next: Function) => {
  const deleteIndex = todos.findIndex((todoToDelete) => todoToDelete.id === id);
  todos.splice(deleteIndex, 1);
  updateStorage(todos);
  next(todos);
};

// Render todo list
export const renderTodos = (todosToRender: Todo[]) => {
  const container = document.querySelector('#todo-container');
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
