import { generateFooter } from '../../molecules/footer/footer';
import { generateHeader } from '../../molecules/header/header';

export const generateBasePage = () => {
  const pageContainer = document.getElementById('page-container');
  const todoContainer = document.createElement('ul');

  todoContainer.setAttribute('id', 'todo-container');

  const header = generateHeader();
  const footer = generateFooter();

  pageContainer?.appendChild(header);
  pageContainer?.appendChild(todoContainer);
  pageContainer?.appendChild(footer);

  return pageContainer;
};
