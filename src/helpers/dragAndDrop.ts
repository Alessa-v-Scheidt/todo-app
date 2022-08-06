import { renderTodos } from '../components/organisms/Todos/todos';
import { updateStorage } from './localStorage';
import { Todo } from './Todo';

let listOfSiblings: any[];
let draggedElement: any;

// statt todos: Todo[] einfach mit elemente: any[] ersetzen
// dann kann ich auf einfach in todos.ts auslagern und todos eingeben
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
    const eventTarget = event.target as HTMLElement;
    if (!event.target) return;

    const dropTarget = eventTarget.closest('li');

    if (dropTarget === draggedElement || !listOfSiblings.includes(dropTarget)) return;

    const draggedIndex = listOfSiblings.indexOf(draggedElement);
    const dropIndex = listOfSiblings.indexOf(dropTarget);

    const draggedTodo = todos[draggedIndex];
    todos.splice(draggedIndex, 1);
    todos.splice(dropIndex, 0, draggedTodo);

    // wie mache ich hier das renderTodos, wenn drag&drop nicht todo spezifisch sein soll?
    renderTodos(todos);
    updateStorage(todos);
  });
};
