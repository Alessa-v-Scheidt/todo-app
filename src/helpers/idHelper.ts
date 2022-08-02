const generateId = () => {
  const hexDigits = '0123456789abcdef';

  return new Array(36).fill('0')
    .map((element, index) => {
    // versionsnummer (version 4 = random uuid)
      if (index === 14) return '4';

      // trennstriche zwischen den 5 gruppen (8-4-4-4-12)
      if ([8, 13, 18, 23].includes(index)) return '-';

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
