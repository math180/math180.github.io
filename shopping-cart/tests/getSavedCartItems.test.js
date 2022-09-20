const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste se o método correto é chamado', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalled()
  })
  it('Teste se o método correto é chamado com o parâmetro', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
  })
});
