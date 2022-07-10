import generateId from '../atoms/id-helper';
import { getTodosFromMyStorage, updateStorage } from '../molecules/local-storage';
import { Todo } from '../atoms/Todo';

const todoContainer = document.getElementById('todoContainer');
const todos: Todo[] = getTodosFromMyStorage();

const deleteTodo = (id: string, next: Function) => {
  const deleteIndex = todos.findIndex((todoToDelete) => todoToDelete.id === id);
  todos.splice(deleteIndex, 1);
  updateStorage(todos);
  next(todos);
};

// Render todo list
export const renderTodos = (todosToRender: Todo[]) => {
  if (!todoContainer) return;
  todoContainer.textContent = '';

  todosToRender.forEach((todo) => {
    const newTodoElement = document.createElement('li');
    newTodoElement.innerHTML = todo.task;

    // Delete Listener
    newTodoElement.addEventListener('click', () => deleteTodo(todo.id, renderTodos));

    console.log(todo.id);
    todoContainer?.appendChild(newTodoElement);
  });
};

export const addTodo = (task: string) => {
  todos.push({
    task,
    id: generateId(),
  });

  updateStorage(todos);
  renderTodos(todos);
};
