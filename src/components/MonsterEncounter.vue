<template lang="html">

  <div class="monster-encounter">
    <p>Encounter</p>
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
    width: 50%;
  }
</style>
