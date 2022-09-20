require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })
  it('Testa se quando passado um parâmetro, a função foi chamada', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled(1)
  })
  it('Testa se ao chamar a função com o argumento: computador, a função fetch utiliza o endpoint correto', async () => {
    await fetchProducts('computador')
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })
  it('Teste se o retorno da função fetchProducts com o argumento: computador é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
   const funcFetch = await fetchProducts('computador');
    expect(funcFetch).toEqual(computadorSearch);
  })
  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    expect( await fetchProducts()).toThrow('You must provide an url');
  });
});
