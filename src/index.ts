import './reset.css';

const text = document.getElementById('text') as HTMLInputElement;
const submit = document.getElementById('submit');
const todoContainer = document.getElementById('todoContainer');

const myStorage = localStorage;
const myStorageKey = 'todo-app.todos';

const todos: string[] = [];

const updateStorage = () => myStorage.setItem(myStorageKey, JSON.stringify(todos));

function renderTodos() {
  todoContainer.textContent = '';

  todos.forEach((todo, index) => {
    const newTodoElement = document.createElement('li');
    newTodoElement.innerHTML = todo;
    // Delete Listener
    newTodoElement.addEventListener('click', () => {
      todos.splice(index, 1);

      updateStorage();
      renderTodos();
    });

    todoContainer.appendChild(newTodoElement);
  });
}

const getTodosFromMyStorage = () => {
  const oldTodos = JSON.parse(myStorage.getItem(myStorageKey));
  oldTodos?.forEach((todo: string) => { todos.push(todo); });

  renderTodos();
};

getTodosFromMyStorage();

function addTodo(todo: string) {
  todos.push(todo);

  updateStorage();

  renderTodos();
}
submit.addEventListener('click', () => {
  if (text?.value === '') return;

  addTodo(text.value);

  text.value = '';
});
