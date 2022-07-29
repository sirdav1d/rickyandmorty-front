const Charcontext = {
  ramEndpoint: () => `${Api.baseUrl}/RickandMorty`,
};

export const Api = {
  baseUrl: 'https://api-ramv1.herokuapp.com/',
  ...Charcontext,
}; 
