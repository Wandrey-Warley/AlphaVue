<template>
  <div id="app">
    <footer class="navbar" id="nav">
      <a href="/">Home</a>
      <div>
        <a href="/ecomerce">Loja</a>
        <a href="/petshop">Petshop</a>
        <a href="/contato">Contato</a>
      </div>
    </footer>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import './assets/styles/main';
</style>
