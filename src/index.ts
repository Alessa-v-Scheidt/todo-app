import './reset.css';
import { getTodosFromMyStorage, updateStorage } from './local-storage';
import { Todo } from './Todo';
import generateId from './id-helper';

const todoContainer = document.getElementById('todoContainer');
const text = document.getElementById('text') as HTMLInputElement;

const todos: Todo[] = getTodosFromMyStorage();

// Render todo list
export const renderTodos = (todosToRender: Todo[]) => {
  if (!todoContainer) return;
  todoContainer.textContent = '';

  todosToRender.forEach((todo) => {
    const newTodoElement = document.createElement('li');
    newTodoElement.innerHTML = todo.task;

    // Delete Listener
    newTodoElement.addEventListener('click', () => {
      const deleteIndex = todos.findIndex((todoToDelete) => todoToDelete.id === todo.id);
      todos.splice(deleteIndex, 1);
      updateStorage(todos);
      renderTodos(todos);
    });

    todoContainer?.appendChild(newTodoElement);
  });
};

const addTodo = (task: string) => {
  todos.push({
    task,
    id: generateId(task),
  });

  updateStorage(todos);
  renderTodos(todos);
};

// Submit
export const handleSubmit = () => {
  if (text?.value === '') return;

  addTodo(text.value);
  text.value = '';
};

document.getElementById('submit')?.addEventListener('click', handleSubmit);

// Render existing todos
renderTodos(todos);
