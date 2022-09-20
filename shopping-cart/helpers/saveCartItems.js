const saveCartItems = (item) => {
 // const getCard = document.querySelector('.cart__items');
  localStorage.setItem('cartItems', item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
