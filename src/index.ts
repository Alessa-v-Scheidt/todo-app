import './reset.css';
import { getTodosFromMyStorage, updateStorage } from './local-storage';
import { Todo } from './Todo';
import generateId from './id-helper';

const todoContainer = document.getElementById('todoContainer');
const text = document.getElementById('text') as HTMLInputElement;

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
