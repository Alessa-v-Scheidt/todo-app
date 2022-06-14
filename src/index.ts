const text = document.getElementById('text') as HTMLInputElement;
const submit = document.getElementById('submit');
const todoContainer = document.getElementById('todoContainer');

const todos: string[] = [];

function renderTodos() {
  todoContainer.textContent = '';

  todos.forEach((todo, index) => {
    const newTodoElement = document.createElement('li');
    newTodoElement.innerHTML = todo;
    newTodoElement.addEventListener('click', () => {
      todos.splice(index, 1);

      renderTodos();
    });

    todoContainer.appendChild(newTodoElement);
  });
}

function addTodo(todo: string) {
  todos.push(todo);

  renderTodos();
}
submit.addEventListener('click', () => {
  if (text?.value === '') return;

  addTodo(text.value);

  text.value = '';
});
