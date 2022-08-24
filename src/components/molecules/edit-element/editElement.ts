import './edit-element.css';
import { generateButton } from '../../atoms/button/button';
import checkmark from '../../../icons/checkmark.svg';
import { EditSubmitParams } from './interface/EditSubmit.interface';
import { Todo } from '../../../helpers/interfaces/Todo.interface';
import { getTodosFromLocalStorage, updateStorage } from '../../../helpers/local-storage/localStorage';
import { renderTodos } from '../../organisms/todos/todos';

export const generateEditElement = (editSubmitCallback: Function) => {
  const newEditElement = document.createElement('div');
  const editInput = document.createElement('input');
  const checkmarkImage = document.createElement('img');
  checkmarkImage.src = checkmark;
  const editSubmitButton = generateButton({
    content: checkmarkImage,
    onClick: () => editSubmitCallback(editInput),
    cssClasses: ['button', 'button__image'],
  });

  newEditElement.classList.add('edit-element');
  editInput.classList.add('edit-element__input');

  // damit Element standardmäßig hidden ist
  newEditElement.style.display = 'none';

  newEditElement.appendChild(editInput);
  newEditElement.appendChild(editSubmitButton);

  return newEditElement;
};

const todos: Todo[] = getTodosFromLocalStorage();

export const submitEditedTodo = ({ todoId, input }: EditSubmitParams) => {
  if (input.parentElement?.dataset.state !== 'active') return;

  const todoToEdit = todos.find((todo) => todo.id === todoId);

  if (!todoToEdit || input.value === '') return;

  todoToEdit.task = input.value;

  updateStorage(todos);
  renderTodos(todos);
};

export const toggleEditInput = (editElement: HTMLElement) => {
  const editRef = editElement;

  if (editRef?.style.display === 'none') {
    editRef.style.display = 'flex';
    editRef.dataset.state = 'active';
  } else {
    editRef.style.display = 'none';
    editRef.dataset.state = '';
  }
};
