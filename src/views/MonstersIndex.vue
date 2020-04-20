<!-- shows a paginated and (hopefully) filterable grouping of monsters -->

<template lang="html">
  <div class="monsters-index">

    <h1>Monsters Index</h1>

    <MonsterListItem
    v-for="monster in allMonsters"
    :monster="monster"
    :currentMonsterCard="currentMonsterCard"
    @toggle-monster-card="toggleMonsterCard" />

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
      allMonsters: [],
      currentMonsterCard: 0
    }
  },
  methods: {
    fetchAllMonsters() {
      fetchService.allMonsters()
      .then(monsters => this.allMonsters = monsters)
    },
    fetchMonster(id) {
      fetchService.monster(id)
      .then(monster => {
        console.log(monster)
      })
    },
    fetchMonsterPage(options) {
      fetchService.allMonsters(options)
      .then(monsters => {
        console.log(monsters)
      })
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
    this.fetchAllMonsters()
  },
  components: {
    MonsterListItem
  }

}
</script>

<style lang="css" scoped>
</style>
