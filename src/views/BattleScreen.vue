<!-- battle screen -->
  <!-- collapsible enemy cards -->
  <!-- collapsed or not, enemies show their CR / defenses -->
  <!-- collapsed or not, health can be adjusted with button presses (+/- button and a field, if nothing is in the field it will +/- for one hp at a time, otherwise it'll add/subtract the field amount and clear the field) -->
  <!-- interface to add cards -->

<template lang="html">
  <div id="battle-screen">
    <MonsterEncounter />
    <MonsterSelector />
  </div>
</template>

<script>
import MonsterEncounter from '@/components/MonsterEncounter'
import MonsterSelector from '@/components/MonsterSelector'

export default {
  name: 'BattleScreen',

  components: {
    MonsterEncounter,
    MonsterSelector
  }

}
</script>

<style lang="css" scoped>
  #battle-screen {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
