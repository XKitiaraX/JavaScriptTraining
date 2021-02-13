<template>
  <div class="home">
    <ProductList
      button-text="Add to cart"
      @button-click="addProduct($event)" title="Products" :products="products"/>
  </div>
</template>

<script>
import PRODUCTS from '@/mock-products';
import SHOPPING_CART from '@/mock-shopping-cart';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'Home',
  components: {
    ProductList,
  },
  data() {
    return {
      products: PRODUCTS,
    };
  },
  methods: {
    addProduct(product) {
      console.log(`Añado al carrito: ${product.name}`);
      SHOPPING_CART.push(product);
    },
  },
};
</script>
