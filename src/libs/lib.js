export const fields = {
  name: 'Название',
  description: 'Описание',
  price: 'Цена',
  quantity: 'Количество',
  image: 'Фото',
}

export function getProductTotalPrice(product) {
  return (product.quantity * product.price).toLocaleString('ru');
}

export function getTotalSum(products) {
  const chosenProducts = products.filter((product) => product.chosen === true);
  return chosenProducts.reduce((acc, product) => {
    return acc += product.quantity * product.price;
  }, 0).toLocaleString('ru');
}