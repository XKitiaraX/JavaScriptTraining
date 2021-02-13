<template>
  <div class="wrapper">
    <h1>{{ title }}</h1>
    <div class="views">
      <span :class="[{selected:!gridView}, 'material-icons']" @click="gridView=false">
        view_list
      </span>
      <span :class="[{selected:gridView}, 'material-icons']" @click="gridView=true">
        view_module
      </span>
    </div>
    <ul :class="{grid:gridView}">
      <li v-for="(product, index) in products" :key="index">
        <h2>{{ product.name }}</h2>
        <img :src="product.image" :alt="product.name">
        <p>
          {{ shortDescription(product.description, 150) }}
        </p>
        <div class="price">{{ product.price | currency }}</div>
        <div>
          <button class="button" @click="$emit('button-click', product)">{{ buttonText }}</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ProductList',
  data() {
    return {
      gridView: false,
    };
  },
  props: {
    products: {
      id: String,
      name: String,
      price: Number,
      description: String,
      image: String,
      createdAt: String,
    },
    title: String,
    buttonText: String,
  },
  mounted() {
    console.log('products listed');
  },
  methods: {
    shortDescription(text, size) {
      return text.length > size
        ? `${text.slice(0, size)}...`
        : text;
    },
  },
  filters: {
    currency(value) {
      return value.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'symbol',
      });
    },
  },
};
</script>

<style scoped>
.views {
  margin: 10px 0;
}

.views span {
  margin-right: 5px;
}

.views .selected {
  border: 1px solid darkgray;
  background: lightgrey;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-gap: 10px;
}

ul li {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: minmax(100px, 150px) auto;
  grid-template-areas: "a b"
                       "a c"
                       "a d"
                       "a e";
  border-bottom: 2px solid lightgray;
  padding-bottom: 20px;
}

ul li * {
  margin: 0;
}

ul li h2 {
  grid-area: b;
  font-size: 14px;
}

ul li img {
  grid-area: a;
  display: block;
  width: 100%;
  max-width: 150px;
}

ul li .price {
  font-size: 16px;
  font-weight: bold;
}

/*grid view*/
ul.grid {
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
}

ul.grid li {
  display: block;
  padding-bottom: 0;
  border-bottom: none;
}

ul.grid li img {
  max-width: none;
}

ul.grid li p {
  display: none;
}

</style>
