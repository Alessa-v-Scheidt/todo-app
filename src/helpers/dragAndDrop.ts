import { renderTodos } from '../components/organisms/Todos/todos';
import { updateStorage } from './localStorage';
import { Todo } from './Todo';

let listOfSiblings: any[];
let draggedElement: any;

export const initDragAndDrop = (todos: Todo[]) => {
  document.addEventListener('dragstart', (event: DragEvent) => {
    if (!event.target) return;
    draggedElement = event.target;
    listOfSiblings = [...draggedElement.parentNode.children];
  });

  document.addEventListener('dragover', (event: DragEvent) => {
    event.preventDefault();
  });

  document.addEventListener('drop', (event) => {
    if (!event.target) return;

    // @ts-ignore
    const dropTarget = event.target.closest('li');

    if (dropTarget === draggedElement || !listOfSiblings.includes(dropTarget)) return;

    const draggedIndex = listOfSiblings.indexOf(draggedElement);
    const dropIndex = listOfSiblings.indexOf(dropTarget);

    const draggedTodo = todos[draggedIndex];
    todos.splice(draggedIndex, 1);
    todos.splice(dropIndex, 0, draggedTodo);

    renderTodos(todos);
    updateStorage(todos);
  });
};
