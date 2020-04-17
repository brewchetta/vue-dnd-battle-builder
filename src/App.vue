<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}
</style>

<!-- General architecture -->

<!-- home page / all battles -->
  <!-- what goes here? can we instead just have a nav bar? possibly a tutorial? -->

<!-- your battles -->
  <!-- list of battles possibly by user (assuming auth and all that) -->
  <!-- battle cards have a name and list participants -->
  <!-- also lists the battle's CR depending on group size (similar to the DND site) -->

<!-- enemy builder screen / quick enemy builder -->
  <!-- this is a template builder to add creatures to the repository -->
  <!-- this should be available as its own routed page as well as a side component for quick builds -->
  <!-- dms add necessary info (stats, bonuses, etc) but can also modify to add specific weapons / attacks -->
  <!-- in future versions this should auto-add a CR -->

<!-- battle screen -->
  <!-- collapsible enemy cards -->
  <!-- collapsed or not, enemies show their CR / defenses -->
  <!-- collapsed or not, health can be adjusted with button presses (+/- button and a field, if nothing is in the field it will +/- for one hp at a time, otherwise it'll add/subtract the field amount and clear the field) -->
  <!-- interface to add cards -->
