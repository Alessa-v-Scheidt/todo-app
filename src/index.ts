import './reset.css';
import './submit';
import { getTodosFromMyStorage } from './local-storage';
import { Todo } from './Todo';
import { renderTodos } from './todos';

const todos: Todo[] = getTodosFromMyStorage();

// Render existing todos
renderTodos(todos);
