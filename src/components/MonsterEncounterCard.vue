<template lang="html">
  <div class="monster-encounter-card">

    <p @click="toggleExpand">Name: {{monster.name}} | {{monster.currentHP}} HP | {{monster.armorClass}} AC</p>
    <div v-if="expanded" class="monster-encounter-card-expanded">
      <p>Challenge Rating: {{monster.challengeRating}}</p>
      <p>Alignment: {{alignment}}</p>
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
      this.$store.dispatch('alterMonster', {idTag: this.monster.idTag, currentHP})
    },
    toggleExpand() {
      this.expanded = !this.expanded
    }
  },
  computed: {
    alignment() {
      const {alignmentLaw, alignmentMoral} = this.monster
      let law
      alignmentLaw === "1" ? law = 'Lawful' :
      alignmentLaw === "2" ? law = 'True' :
        law = 'Chaotic'
      let moral
      alignmentMoral === "1" ? moral = 'Good' :
      alignmentMoral === "2" ? moral = 'Neutral' :
        moral = 'Evil'
      return `${law} ${moral}`
    }
  }
}
</script>

<style lang="css" scoped>
  .monster-encounter-card {
    border: solid black 2px;
  }
</style>
