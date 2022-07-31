import './reset.css';
import './styles.css';
import { getTodosFromMyStorage } from './helpers/local-storage';
import { Todo } from './helpers/Todo';
import { initTodoList } from './components/organisms/Todos/todos';
import { renderModal } from './helpers/modal-helper';
import { initDragAndDrop } from './helpers/drag-and-drop';

const todos: Todo[] = getTodosFromMyStorage();

// Render existing todos
initTodoList(todos);
renderModal();
initDragAndDrop(todos);
