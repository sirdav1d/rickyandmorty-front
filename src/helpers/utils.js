export const Normalize = (str) =>
  str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

export const matchByText = (searchedText, nome) =>
  Normalize(searchedText).includes(Normalize(nome));
