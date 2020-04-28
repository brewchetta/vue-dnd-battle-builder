<template lang="html">

  <div class="monster-encounter">
    <p>Encounter</p>
    <p v-for="m in currentEncounter.monsters">{{m.name}}</p>
  </div>

</template>

<script>
export default {

  name: 'MonsterEncounter',
  computed: {
    currentEncounter() {
      console.log('firing')
      return this.$store.state.currentEncounter
    }
  }

}
</script>

<style lang="css" scoped>
  .monster-encounter {
    border: solid black 2px;
    width: 50%;
  }
</style>
