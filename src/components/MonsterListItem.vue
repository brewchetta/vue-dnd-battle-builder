<!-- contracted list item, clicking expands to card -->

<template lang="html">

  <div class="monster-list-item">

      <p @click="handleClick">{{monster.name}} | {{monster.armorClass}} AC | {{monster.challengeRating}} CR</p>

      <MonsterListCard v-if="showCard" :monster="monster" />

  </div>

</template>

<script>
import MonsterListCard from '@/components/MonsterListCard'

export default {
  props: {
    monster: Object,
    currentMonsterCard: Number
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
</style>
