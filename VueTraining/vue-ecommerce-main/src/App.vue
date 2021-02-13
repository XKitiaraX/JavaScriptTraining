<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: { Header },
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto Slab', serif;
}

span.material-icons {
  cursor: pointer;
}

.wrapper {
  padding-left: 20px;
  padding-right: 20px;
}

.button {
  padding: 8px 15px;
  background: dodgerblue;
  border: none;
  border-radius: 2px;
  color: white;
}
</style>
