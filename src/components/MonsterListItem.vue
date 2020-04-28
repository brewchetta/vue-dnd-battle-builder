<!-- contracted list item, clicking expands to card -->

<template lang="html">

  <div class="monster-list-item">

      <p><span @click="handleClick">{{monster.name}} | {{monster.armorClass}} AC | {{monster.challengeRating}} CR</span> <button v-if="selectable">+</button></p>

      <MonsterListCard v-if="showCard" :monster="monster" />

  </div>

</template>

<script>
import MonsterListCard from '@/components/MonsterListCard'

export default {
  props: {
    monster: Object,
    currentMonsterCard: Number,
    selectable: Boolean
  },
  methods: {
    handleClick() {
      this.$emit('toggle-monster-card', this.monster.id)
    }
  },
  components: {
    MonsterListCard
  },
  computed: {
    showCard() {
      return this.currentMonsterCard === this.monster.id
    }
  }
}
</script>

<style lang="css" scoped>
  .monster-list-item p {
    background-image: linear-gradient(#333, #000);
    color: white;
    cursor: pointer;
    padding: 5px;
  }
</style>
