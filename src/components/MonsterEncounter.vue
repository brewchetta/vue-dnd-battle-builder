<template lang="html">

  <div class="monster-encounter">
    <MonsterEncounterCard v-for="monster in currentEncounter.monsters" :monster="monster" />
  </div>

</template>

<script>
import MonsterEncounterCard from './MonsterEncounterCard'

export default {

  name: 'MonsterEncounter',

  computed: {
    currentEncounter() {
      return this.$store.state.currentEncounter
    }
  },

  components: {
    MonsterEncounterCard
  }

}
</script>

<style lang="css" scoped>
  .monster-encounter {
    border: solid black 2px;
    width: 80%;
    margin: 10%;
    min-height: 50vh;
  }
</style>
