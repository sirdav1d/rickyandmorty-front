import { Api } from 'helpers/Api';

const parseResponse = (response) => response.json();

export const CharService = {
  getAll: () => fetch(Api.charList(), { method: 'GET' }).then(parseResponse),

  getById: (id) =>
    fetch(Api.charById(id), { method: 'GET' }).then(parseResponse),

  create: () => fetch(Api.charCreate(), { method: 'POST' }).then(parseResponse),

  upById: (id) =>
    fetch(Api.charUpdateById(id), { method: 'UPDATE' }).then(parseResponse),

  delById: (id) =>
    fetch(Api.charDeleteById(id), { method: 'DELETE' }).then(parseResponse),
};
