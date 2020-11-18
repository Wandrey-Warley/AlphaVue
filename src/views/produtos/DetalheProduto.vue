<template
  ><div>
    <div><h2>Detalhe do Produto</h2></div>
    <div>Nome Produto: {{ produto }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return { produto: 'desconhecido' };
  },
  mounted() {
    this.produto = this.$route.params.id;
  },
};
</script>

<style></style>
