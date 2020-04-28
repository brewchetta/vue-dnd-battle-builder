<!-- battle screen -->
  <!-- collapsible enemy cards -->
  <!-- collapsed or not, enemies show their CR / defenses -->
  <!-- collapsed or not, health can be adjusted with button presses (+/- button and a field, if nothing is in the field it will +/- for one hp at a time, otherwise it'll add/subtract the field amount and clear the field) -->
  <!-- interface to add cards -->

<template lang="html">
  <div>
    <h1>Battle Screen</h1>
    <MonsterSelector />
  </div>
</template>

<script>
import MonsterSelector from '@/components/MonsterSelector'

export default {
  name: 'BattleScreen',

  components: {
    MonsterSelector
  },

  created() {
    console.log(this.$store.state.currentEncounter.monsters)
  }
}
</script>

<style lang="css" scoped>
</style>
