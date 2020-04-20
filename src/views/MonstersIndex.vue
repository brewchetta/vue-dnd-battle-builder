<!-- shows a paginated and (hopefully) filterable grouping of monsters -->

<template lang="html">
  <div class="monsters-index">
    <h1>Monsters Index</h1>
  </div>
</template>

<script>
import fetchService from '@/fetchService'

export default {
  data() {
    return {
      currentMonsters: [],
      page: 1
    }
  },
  methods: {
    fetchAllMonsters() {
      fetchService.allMonsters()
      .then(monsters => {
        console.log(monsters)
      })
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
    }
  },
  created() {
    this.fetchAllMonsters()
  }

}
</script>

<style lang="css" scoped>
</style>
