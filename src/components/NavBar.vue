<!-- NavBar leads to different pages -->

<template lang="html">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/battles">Battles Index</router-link> |
    <router-link to="/battle">Battle Screen</router-link> |
    <router-link to="/monsters-index">Monsters Index</router-link> |
    <router-link to="/enemy-builder">Enemy Builder</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style lang="scss" scoped>
a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
