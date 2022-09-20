const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado',  () => {
    saveCartItems('cartItems');
    expect(localStorage.setItem).toHaveBeenCalled()
  });
  it('Teste se o método correto é chamado com dois parâmetros', () => {
    saveCartItems('cartItems');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'item');
  })
});
