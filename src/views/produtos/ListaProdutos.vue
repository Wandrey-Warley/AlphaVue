<template>
  <div>
    <div><h2>Lista de Produtos</h2></div>
    <div v-for="(produto, index) in this.produtos" :key="index">
      <router-link :to="'/ecomerce/' + produto">{{ produto }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produtos: ['racao', 'remedio', 'brinquedo', 'tapete'],
    };
  },
};
</script>

<style></style>
