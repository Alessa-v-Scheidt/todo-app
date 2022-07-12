import { addTodo } from '../organisms/Todos/todos';

const text = document.getElementById('text') as HTMLInputElement;

const handleSubmit = () => {
  if (text?.value === '') return;

  addTodo(text.value);
  text.value = '';
};

document.getElementById('submit')?.addEventListener('click', handleSubmit);
