const CharContext = {
  ramEndpoint: () => `${Api.baseUrl}/RickandMorty`,

  charList: () => `${CharContext.ramEndpoint()}/all-characters`,
  charById: (id) => `${CharContext.ramEndpoint()}/find-character/${id}`,
  charCreate: () => `${CharContext.ramEndpoint()}/create`,
  charUpdateById: (id) => `${CharContext.ramEndpoint()}/update/${id}`,
  charDeleteById: (id) => `${CharContext.ramEndpoint()}/delete/${id}`,
};

export const Api = {
  baseUrl: 'https://api-ramv1.herokuapp.com',
  ...CharContext,
};
