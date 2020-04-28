<template lang="html">
  <div class="monster-encounter-card">
    <p>Name: {{monster.name}} | {{hitPoints}} HP | {{monster.armorClass}} AC</p>
    <div v-if="expanded" class="monster-encounter-card-expanded">
      <p>Challenge Rating: {{monster.challengeRating}}</p>
      <p>Alignment: {{monster.alignmentLaw}}law {{monster.alignmentMoral}}moral</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonsterEncounterCard',
  data() {
    return {
      hitPoints: this.monster.hitPoints,
      conditions: [],
      expanded: false
    }
  }
  props: {
    monster: Object
  }
}
</script>

<style lang="css" scoped>
  .monster-encounter-card {
    border: solid black 2px
  }
</style>
