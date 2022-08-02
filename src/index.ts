import './reset.css';
import './styles.css';
import { getTodosFromMyStorage } from './helpers/localStorage';
import { Todo } from './helpers/Todo';
import { initTodoList } from './components/organisms/Todos/todos';
import { renderModal } from './helpers/modalHelper';
import { initDragAndDrop } from './helpers/dragAndDrop';

const todos: Todo[] = getTodosFromMyStorage();

// Render existing todos
initTodoList(todos);
renderModal();
initDragAndDrop(todos);
