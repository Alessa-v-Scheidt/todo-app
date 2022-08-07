import './reset.css';
import './styles.css';
import { initTodoList } from './components/organisms/Todos/todos';
import { renderModal } from './helpers/modalHelper';

// Render existing todo
renderModal();
initTodoList();
