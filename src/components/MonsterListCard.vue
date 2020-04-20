<template lang="html">

  <div class="monster-list-card">

    <p>Name: {{monster.name}}</p>
    <p>Hit Points: {{monster.hitPoints}}</p>
    <p>Armor Class: {{monster.armorClass}}</p>
    <p>Challenge Rating: {{monster.challengeRating}}</p>
    <p>Alignment: {{monster.alignmentLaw}}law {{monster.alignmentMoral}}moral</p>

  </div>

</template>

<script>
export default {
  props: {
    monster: Object
  }
}
</script>

<style lang="css" scoped>
  .monster-list-card {
    border: solid black 2px
  }
</style>
