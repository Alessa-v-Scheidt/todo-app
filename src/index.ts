import './reset.css';
import { Todo } from './Todo';

const text = document.getElementById('text') as HTMLInputElement;
const submit = document.getElementById('submit');
const todoContainer = document.getElementById('todoContainer');

const myStorage = localStorage;
const myStorageKey = 'todo-app.todos';
let lastId: number;

let todos: Todo[] = [];

const updateStorage = () => myStorage.setItem(myStorageKey, JSON.stringify(todos));

const deleteTodo = (id: number, next: () => void) => {
  todos = todos.filter((todo) => todo.id !== id);

  updateStorage();
  next();
};

const renderTodos = () => {
  if (!todoContainer) return;
  todoContainer.textContent = '';

  todos.forEach((todo) => {
    const newTodoElement = document.createElement('li');
    newTodoElement.innerHTML = todo.task;
    // Delete Listener
    newTodoElement.addEventListener('click', () => deleteTodo(todo.id, renderTodos));

    todoContainer?.appendChild(newTodoElement);
  });
};

const getTodosFromMyStorage = () => {
  const oldTodoString = myStorage.getItem(myStorageKey);

  if (!oldTodoString) return;

  const oldTodos = JSON.parse(oldTodoString);
  oldTodos?.forEach((todo: Todo) => { todos.push(todo); });

  renderTodos();
};

const generateId = () => {
  lastId += 1;
  return lastId;
};

const addTodo = (task: string) => {
  todos.push({
    task,
    id: generateId(),
  });

  updateStorage();
  renderTodos();
};

const submitEvent = () => {
  submit?.addEventListener('click', () => {
    if (text?.value === '') return;

    addTodo(text.value);

    text.value = '';
  });
};

submitEvent();

// init
getTodosFromMyStorage();

const setLastID = () => {
  if (todos.length > 0) {
    lastId = Math.max(...todos.map((todo) => todo.id));
  } else {
    lastId = 0;
  }
};

setLastID();
