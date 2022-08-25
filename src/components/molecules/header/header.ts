export const generateHeader = () => {
  const newHeader = document.createElement('header');
  const headerHeadline = document.createElement('h1');

  newHeader.classList.add('header');
  headerHeadline.classList.add('header__headline');

  headerHeadline.textContent = 'TODO';

  newHeader.appendChild(headerHeadline);

  return newHeader;
};
