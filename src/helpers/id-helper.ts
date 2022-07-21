const generateId = () => {
  const uuid: string[] = new Array(36);
  const hexDigits = '0123456789abcdef';

  uuid.forEach((_, index) => {
    const randomIndex = Math.floor(Math.random() * hexDigits.length);
    uuid[index] = hexDigits.charAt(randomIndex);
  });

  // versionsnummer (version 4 = random uuid)
  uuid[14] = '4';

  // trennstriche zwischen den 5 gruppen (8-4-4-4-12)
  uuid[8] = '-';
  uuid[13] = '-';
  uuid[18] = '-';
  uuid[23] = '-';

  const newUuid = uuid.join('');
  return newUuid;
};

export const validateId = () => {
  const localStorageString = JSON.stringify(window.localStorage);
  let newId = generateId();

  while (localStorageString.includes(newId)) {
    newId = generateId();
  }

  return newId;
};
