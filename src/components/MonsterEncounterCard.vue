<template lang="html">
  <div class="monster-encounter-card">

    <p>Name: {{monster.name}} | {{monster.currentHP}} HP | {{monster.armorClass}} AC</p>
    <div v-if="expanded" class="monster-encounter-card-expanded">
      <p>Challenge Rating: {{monster.challengeRating}}</p>
      <p>Alignment: {{monster.alignmentLaw}}law {{monster.alignmentMoral}}moral</p>
    </div>
    <button type="button" name="subtract-hitpoint-button" @click="alterHitPoints(monster.currentHP - 1)">-1</button>
    <button type="button" name="subtract-hitpoint-button" @click="alterHitPoints(monster.currentHP + 1)">+1</button>

    <button type="button" name="remove-monster-button" @click="removeMonster">--</button>

  </div>
</template>

<script>
export default {
  name: 'MonsterEncounterCard',
  data() {
    return {
      expanded: false
    }
  },
  props: {
    monster: Object
  },
  methods: {
    removeMonster() {
      this.$store.dispatch('removeMonster', this.monster.idTag)
    },
    alterHitPoints(currentHP) {
      console.log(currentHP)
      this.$store.dispatch('alterMonster', {idTag: this.monster.idTag, currentHP})
    },
  }
}
</script>

<style lang="css" scoped>
  .monster-encounter-card {
    border: solid black 2px
  }
</style>
