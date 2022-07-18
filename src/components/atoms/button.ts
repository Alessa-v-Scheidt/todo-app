export const generateButton = (text: string, callback: () => void) => {
  const newButton = document.createElement('button');
  newButton.textContent = text;
  newButton.addEventListener('click', callback);

  return newButton;
};
