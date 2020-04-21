<!-- creature builder screen / quick creature builder -->
  <!-- this is a template builder to add creatures to the repository -->
  <!-- this should be available as its own routed page as well as a side component for quick builds -->
  <!-- dms add necessary info (stats, bonuses, etc) but can also modify to add specific weapons / attacks -->
  <!-- in future versions this should auto-add a CR -->
<!-- this should be used when building or editing a monster -->

<template lang="html">
  <div class="enemy-builder-main">

    <h1>Enemy Builder (Main View)</h1>

    <form>

      <label>Name</label>
      <input v-model="name"
      type="text"
      name="name"
      value="">

      <br/>

      <label>Alignment (switch to two radio buttons?)</label>
      <input v-model="alignmentMoral"
      type="number"
      name="alignment"
      value="">

      <br/>

      <label>Challenge Rating (select dropdown in order to get the 1/8 and stuff)</label>
      <input v-model="challengeRating"
      type="text"
      name="challenge-rating"
      value="">

      <br/>

      <label>Armor Class (number)</label>
      <input v-model="armorClass"
      type="number"
      name="armor-class"
      value="">

      <br/>

      <label>Hit Points (number)</label>
      <input v-model="hitPoints"
      type="number"
      name="hit-points"
      value="">

    </form>

    <p v-show="name.length">Name: {{name}}</p>

  </div>
</template>

<script>
import fetchService from '@/fetchService'

export default {
  name: 'EnemyBuilderMain',
  data() {
    return {
      id: 0,
      name: "",
      alignmentMoral: 1,
      alignmentLaw: 1,
      challengeRating: "0",
      armorClass: 10,
      hitPoints: 10
      // abilities ought to be a seperate set of components created by an array here
    }
  },
  created() {
    // if this template was reached through a specific monster edit, fill out details
    if (this.$route.params.monsterId) {
      fetchService.monster(this.$route.params.monsterId)
      .then(m => {
        this.name = m.name
        this.alignmentMoral = m.alignmentMoral
        this.alignmentLaw = m.alignmentLaw
        this.challengeRating = m.challengeRating
        this.armorClass = m.armorClass
        this.hitPoints = m.hitPoints
        this.id = m.id
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
