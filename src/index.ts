import './reset.css';
import './components/organisms/submit';
import { getTodosFromMyStorage } from './components/molecules/local-storage';
import { Todo } from './components/atoms/Todo';
import { renderTodos } from './components/organisms/todos';

const todos: Todo[] = getTodosFromMyStorage();

// Render existing todos
renderTodos(todos);
