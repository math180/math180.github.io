// const getSavedCartItems = require('./helpers/getSavedCartItems');

// criar função de carregamento de tela
const loading = document.createElement('div');

const createLoading = () => {
  loading.className = 'loading';
  loading.innerText = 'carregando...';
  document.querySelector('.cart').appendChild(loading);
};

const rmvLoading = () => {
  loading.remove();
};

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 */

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 */

const cartItemClickListener = (event) => {
  event.target.remove();
};

 /**
  * Função responsável por criar e retornar um item do carrinho.
  */
 const createCartItemElement = ({ id, title, price }) => {
   const li = document.createElement('li');
   li.className = 'cart__item';
   li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
   li.addEventListener('click', cartItemClickListener);
   return li;
 };

/**
 * Função responsável por criar e retornar qualquer elemento.
 */
const getCardItens = document.querySelector('.cart__items');

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  if (className === 'item__add') {
    e.addEventListener('click', async () => {
      createLoading();
      const re = await fetchItem(e.parentNode.firstChild.innerText);
      const createCard = createCartItemElement({ id: re.id, title: re.title, price: re.price });
      getCardItens.appendChild(createCard);
      saveCartItems(getCardItens.innerHTML);
      rmvLoading();
    });
  }
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 */

const createProductItemElement = ({ id, title, thumbnail, price }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createCustomElement('span', 'item_price', `R$${price}`));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const listProducts = async () => {
  createLoading();
  const section = document.querySelector('.items');
  const products = await fetchProducts('computador');
  products.forEach((p) => {
  const item = createProductItemElement({ 
    id: p.id, title: p.title, thumbnail: p.thumbnail, price: p.price });
    section.appendChild(item);
  });
  rmvLoading();
};

document.querySelector('.empty-cart').addEventListener('click', () => {
  getCardItens.innerHTML = '';
});

window.onload = async () => {
  await listProducts();
};
