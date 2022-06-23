import './reset.css';

const text = document.getElementById('text') as HTMLInputElement;
const submit = document.getElementById('submit');
const todoContainer = document.getElementById('todoContainer');

const myStorage = localStorage;
const myStorageKey = 'todo-app.todos';
let lastId;

interface Todo {
  task: string;
  id: number;
}

let todos: Todo[] = [];

const updateStorage = () => myStorage.setItem(myStorageKey, JSON.stringify(todos));

const deleteTodo = (id: number, next) => {
  todos = todos.filter((todo) => todo.id !== id);

  updateStorage();
  next();
};

const renderTodos = () => {
  todoContainer.textContent = '';

  todos.forEach((todo) => {
    const newTodoElement = document.createElement('li');
    newTodoElement.innerHTML = todo.task;
    // Delete Listener
    newTodoElement.addEventListener('click', () => deleteTodo(todo.id, renderTodos));

    todoContainer.appendChild(newTodoElement);
  });
};

const getTodosFromMyStorage = () => {
  const oldTodos = JSON.parse(myStorage.getItem(myStorageKey));
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

submit.addEventListener('click', () => {
  if (text?.value === '') return;

  addTodo(text.value);

  text.value = '';
});

// init
getTodosFromMyStorage();
if (todos.length > 0) {
  lastId = Math.max(...todos.map((todo) => todo.id));
} else {
  lastId = 0;
}
