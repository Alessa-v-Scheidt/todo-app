import './reset.css';
import './styles.css';
import { initTodoList } from './components/organisms/todos/todos';
import { renderModal } from './helpers/modalHelper';
import { generateBasePage } from './components/pages/base-page/basePage';

generateBasePage();
renderModal();
initTodoList();
