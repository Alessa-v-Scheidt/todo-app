import './reset.css';
import './components/atoms/submit';
import { getTodosFromMyStorage } from './components/molecules/local-storage';
import { Todo } from './helpers/Todo';
import { renderTodos } from './components/organisms/Todos/todos';

const todos: Todo[] = getTodosFromMyStorage();

// Render existing todos
renderTodos(todos);
