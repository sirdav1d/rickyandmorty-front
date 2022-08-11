import { Api } from 'helpers/api';

const parseResponse = (response) => response.json();

export const CharService = {
  getAll: () => fetch(Api.charList(), { method: 'GET' }).then(parseResponse),

  getById: (id) =>
    fetch(Api.charById(id), { method: 'GET' }).then(parseResponse),

  create: (character) =>
    fetch(Api.charCreate(), {
      method: 'POST',
      body: JSON.stringify(character),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(parseResponse),

  upById: (id) =>
    fetch(Api.charUpdateById(id), { method: 'UPDATE' }).then(parseResponse),

  delById: (id) =>
    fetch(Api.charDeleteById(id), { method: 'DELETE' }).then(parseResponse),
};
