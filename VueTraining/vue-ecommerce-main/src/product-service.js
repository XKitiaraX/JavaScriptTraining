// No se usa

import SHOPPING_CART from '@/mock-shopping-cart';

export const removeProduct = (product) => {
  console.log(`Borro del carrito : ${product.name}`);
  const id = SHOPPING_CART.findIndex((value) => value.id === product.id);
  SHOPPING_CART.splice(id, 1);
};

export const addProduct = (product) => {
  console.log(`Borro del carrito : ${product.name}`);
  const id = SHOPPING_CART.findIndex((value) => value.id === product.id);
  SHOPPING_CART.splice(id, 1);
  return product;
};
