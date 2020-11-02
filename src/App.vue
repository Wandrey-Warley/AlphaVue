<template>
  <div id="app">
    <div id="nav" class="navbar">
      <router-link to="/">Home</router-link> |
      <router-link to="/petshop">Petshop</router-link>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.navbar {
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  border: 1px solid grey;
}
.main {
  padding-top: 85px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
