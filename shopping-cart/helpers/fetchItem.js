const fetchItem = async (itemId) => {
  try {
    const url = `https://api.mercadolibre.com/items/${itemId}`;
    const response = await fetch(url);
    const convert = await response.json();
    console.log(convert);
    return convert;
  } catch (erro) {
    return `${erro}`;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
