<template lang="html">

  <form @submit="addSkill" class="skills-form">
    <label for="skill-name">Add Skill</label>
    <select v-model="skill.name" name="skill-name">
      <!-- TODO: add brewstools capitalize -->
      <option value=""></option>
      <option v-for="skill in Object.keys(skillsList)" :value="skill">{{skill[0].toUpperCase() + skill.slice(1)}}</option>
    </select>
    <!-- TODO: add input for name if custom skill? -->
    <input v-model="skill.bonus" type="number" name="skill-bonus" value="">
    <input type="submit" name="skill-form-submit" value="Submit">


    <!-- Current Skills -->
    <div class="skills-container">
      <span v-for="skill in skills"
      @click="removeSkill(skill)">

        {{skill.name}} {{skill.bonus >= 0 ? "+" : null}}{{skill.bonus}}

        <br/>

      </span>
    </div>
  </form>

</template>

<script>
import skillsList from '@/data/skills'

export default {
  name: 'MonsterSkillsListForm',
  props: {
    skills: Array
  },
  data() {
    return {
      skill: {
        name: '',
        bonus: ''
      }
    }
  },
  methods: {
    addSkill(e) {
      e.preventDefault()
      this.$emit('add-skill', {...this.skill})
    }
  },
  computed: {
    skillsList() {
      return skillsList
    }
  }
}
</script>

<style lang="css" scoped>
</style>
