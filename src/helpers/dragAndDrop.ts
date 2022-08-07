let listOfSiblings: HTMLElement[];
let draggedElement: HTMLElement;

export const initDragAndDrop = <T>(
  listOfDraggableElements: T[],
  next: (updatedList: T[]) => void,
) => {
  document.addEventListener('dragstart', (event: DragEvent) => {
    if (!event.target) return;
    draggedElement = event.target as HTMLElement;
    if (!draggedElement.parentNode) return;
    listOfSiblings = [...draggedElement.parentNode.children] as HTMLElement[];
  });

  document.addEventListener('dragover', (event: DragEvent) => {
    event.preventDefault();
  });

  document.addEventListener('drop', (event) => {
    const eventTarget = event.target as HTMLElement;
    if (!event.target) return;

    const dropTarget = eventTarget.closest('li') as HTMLElement;

    if (dropTarget === draggedElement || !listOfSiblings.includes(dropTarget)) return;

    const draggedIndex = listOfSiblings.indexOf(draggedElement);
    const dropIndex = listOfSiblings.indexOf(dropTarget);

    const draggedTodo = listOfDraggableElements[draggedIndex];
    listOfDraggableElements.splice(draggedIndex, 1);
    listOfDraggableElements.splice(dropIndex, 0, draggedTodo);

    next(listOfDraggableElements);
  });
};
