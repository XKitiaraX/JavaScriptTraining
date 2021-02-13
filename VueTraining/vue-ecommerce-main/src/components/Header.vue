<template>
  <header class="wrapper">
    <span class="material-icons" @click="navOpen=!navOpen">
      menu
    </span>
    <nav v-show="navOpen">
      <ul>
        <li>
          <router-link to="/">
            <i class="material-icons">view_list</i>
            Products
            <i class="material-icons" v-if="actualRoute!=='Home'">keyboard_arrow_right</i>
          </router-link>
        </li>
        <li>
          <router-link to="/shopping-cart">
            <i class="material-icons">shopping_cart</i>
            Shopping Car
            <i class="material-icons" v-if="actualRoute!=='Shopping cart'">keyboard_arrow_right</i>
          </router-link>
        </li>
        <li>
          <router-link to="/add-product">
            <i class="material-icons">note_add</i>
            New product
            <i class="material-icons" v-if="actualRoute!=='Add product'">keyboard_arrow_right</i>
          </router-link>
        </li>
      </ul>
    </nav>
    <div>
      Vue Ecommerce
    </div>
    <router-link to="/shopping-cart">
      <span class="material-icons">shopping_cart</span>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navOpen: false,
    };
  },
  computed: {
    actualRoute() {
      return this.$route.name;
    },
  },
};
</script>

<style>
header {
  background: dodgerblue;
  color: white;
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
}

header a {
  color: white;
}

header nav {
  background: white;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2),
  0 4px 5px 0 rgba(0, 0, 0, .14),
  0 1px 10px 0 rgba(0, 0, 0, .12);
  border-radius: 4px;
  color: black;
  position: absolute;
  top: 40px;
  left: 20px;
  padding: 5px 0;
}

header nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

header nav ul a {
  color: black;
  text-decoration: none;
  display: flex;
  padding: 10px;
  align-items: center;
}

header nav ul a:hover {
  background: rgba(0, 0, 0, .04);
}

header nav ul a span {
  margin-right: 8px;
}
header nav ul a.router-link-exact-active {
  color: gray;
}

</style>
