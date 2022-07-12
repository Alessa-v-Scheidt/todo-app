export default (text: string, callback: () => void) => {
  const newButton = document.createElement('button');
  newButton.textContent = text;
  // cssClasses.forEach(class => newButton.classList.add(class))
  newButton.addEventListener('click', callback);

  return newButton;
};
