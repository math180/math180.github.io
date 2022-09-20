require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Testa se a função existe', () => {
    expect(typeof fetchItem).toBe('function');
  });
  test('Testa se a função utiliza o endpoint correto', async () => {
  await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled(1);
  });
  test('Testa se a função utiliza o endpoint correto', async () => {
  await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  test('Teste se o retorno da função que deve ser igual ao objeto item', async () => {
   const funcFetch = await fetchItem('MLB1615760527')
    expect(funcFetch).toEqual(item)
  });
  test('Teste se a função estiver sem argumento, retorna um erro', async () => {
    expect( await fetchItem()).toThrow('You must provide an url')
   });
});
