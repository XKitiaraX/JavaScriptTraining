<template>
  <div class="home">
    <ProductList
      button-text="Remove from cart"
      @button-click="removeProduct($event)" title="Shopping Cart" :products="products"/>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import SHOPPING_CART from '@/mock-shopping-cart';

export default {
  name: 'ShoppingCart',
  components: {
    ProductList,
  },
  data() {
    return {
      products: SHOPPING_CART,
    };
  },
  methods: {
    removeProduct(product) {
      console.log(`Borro del carrito : ${product.name}`);
      const id = SHOPPING_CART.findIndex((value) => value.id === product.id);
      SHOPPING_CART.splice(id, 1);
    },
  },
};
</script>
