import { addTodo } from '../components/organisms/Todos/todos';

export const openModalCallback = () => {
  const modal = document.getElementById('modal');
  if (!modal) return;
  modal.style.display = 'block';
};

export const closeModal = (event: MouseEvent) => {
  const modal = document.getElementById('modal');
  if (!modal || event.target !== modal) return;
  modal.style.display = 'none';
};

export const addNewTodo = () => {
  const text = document.getElementById('newTodoInput') as HTMLInputElement;
  if (text?.value === '') return;

  addTodo(text.value);
  text.value = '';

  const modal = document.getElementById('modal');
  if (!modal) return;
  modal.style.display = 'none';
};
