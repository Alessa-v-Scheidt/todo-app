import './reset.css';
import './styles.css';
import './components/atoms/submit';
import { getTodosFromMyStorage } from './helpers/local-storage';
import { Todo } from './helpers/Todo';
import { renderTodos } from './components/organisms/Todos/todos';

const todos: Todo[] = getTodosFromMyStorage();

// Render existing todos
renderTodos(todos);
