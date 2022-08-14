const uuidVersionNumber = '4';
const positionOfHyphens = [8, 13, 18, 23];

const generateId = () => {
  const hexDigits = '0123456789abcdef';

  return new Array(36).fill('0')
    .map((element, index) => {
      if (index === 14) return uuidVersionNumber;

      if (positionOfHyphens.includes(index)) return '-';

      const randomIndex = Math.floor(Math.random() * hexDigits.length);
      return hexDigits.charAt(randomIndex);
    })
    .join('');
};

export const validateId = () => {
  const localStorageString = JSON.stringify(window.localStorage);
  let newId = generateId();

  while (localStorageString.includes(newId)) {
    newId = generateId();
  }

  return newId;
};
