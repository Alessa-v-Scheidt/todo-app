import './reset.css';
import { getTodosFromMyStorage } from './local-storage';
import { Todo } from './Todo';
import { addTodo, renderTodos } from './todos';

const text = document.getElementById('text') as HTMLInputElement;

const todos: Todo[] = getTodosFromMyStorage();

// Submit
const handleSubmit = () => {
  if (text?.value === '') return;

  addTodo(text.value);
  text.value = '';
};

document.getElementById('submit')?.addEventListener('click', handleSubmit);

// Render existing todos
renderTodos(todos);
