import './reset.css';
import './styles.css';
import { getTodosFromMyStorage } from './helpers/local-storage';
import { Todo } from './helpers/Todo';
import { renderTodos } from './components/organisms/Todos/todos';
import { renderModal } from './helpers/modal-helper';

const todos: Todo[] = getTodosFromMyStorage();

// Render existing todos
renderTodos(todos);
renderModal();
