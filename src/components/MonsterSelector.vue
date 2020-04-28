<!-- shows a paginated and (hopefully soon to be) filterable grouping of monsters -->

<template lang="html">
  <div class="monster-selector">

    <h1>Monster Selector</h1>

    <!-- current monsters list based on page -->
    <MonsterListItem
    v-for="monster in currentMonsters"
    :key="monster.id"
    :monster="monster"
    :selectable="true"
    :currentMonsterCard="currentMonsterCard"
    @toggle-monster-card="toggleMonsterCard" />

    <!-- Previous page button -->
    <button @click="paginate(false)"
    :disabled="page <= 1"
    >Previous</button>

    <!-- Next page button -->
    <button @click="paginate(true)"
    :disabled="currentMonsters.length <= 9"
    >Next</button>

  </div>
</template>

<script>
import fetchService from '@/fetchService'
import MonsterListItem from '@/components/MonsterListItem'

export default {
  data() {
    return {
      currentMonsters: [],
      page: 1,
      currentMonsterCard: 0
    }
  },
  methods: {

    fetchMonster(id) {
      fetchService.monster(id)
      .then(monster => {
        console.log(monster)
      })
    },

    fetchMonsterPage(options) {
      fetchService.monsterPage(options)
      .then(monsters => this.currentMonsters = monsters)
    },

    paginate(isForwards) {
      if (isForwards && this.currentMonsters.length > 9) {
        this.page ++
        this.fetchMonsterPage({page: this.page})
      } else if (!isForwards && this.page > 1) {
        this.page --
        this.fetchMonsterPage({page: this.page})
      }
    },

    toggleMonsterCard(id) {
      if (this.currentMonsterCard === id) {
        this.currentMonsterCard = 0
      } else {
        this.currentMonsterCard = id
      }
    }
  },

  created() {
    this.fetchMonsterPage()
  },

  components: {
    MonsterListItem
  }

}
</script>

<style lang="css" scoped>
  .monster-selector {
    width: 50%;
  }
</style>
