<template>
  <the-navigation></the-navigation>
  <router-view></router-view>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation
  },
 data() {
  return {

  };
 }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

*, :before, :after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6, p, li, table {
  font-family: 'Roboto';
}

table tr td {
  font-size: 0.85rem;
}

</style>
