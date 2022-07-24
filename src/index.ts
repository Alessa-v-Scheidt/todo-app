import './reset.css';
import './styles.css';
import { getTodosFromMyStorage } from './helpers/local-storage';
import { Todo } from './helpers/Todo';
import { renderTodos } from './components/organisms/Todos/todos';
import { init } from './components/atoms/init';

const todos: Todo[] = getTodosFromMyStorage();

// Render existing todos
renderTodos(todos);
init();
