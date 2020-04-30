<!-- creature builder screen / quick creature builder -->
  <!-- this is a template builder to add creatures to the repository -->
  <!-- this should be available as its own routed page as well as a side component for quick builds -->
  <!-- dms add necessary info (stats, bonuses, etc) but can also modify to add specific weapons / attacks -->
  <!-- in future versions this should auto-add a CR -->
<!-- this should be used when building or editing a monster -->

<!-- TODO:
add actions
break environment / language / skills / senses into their own component
-->

<template lang="html">
  <div class="enemy-builder-main">

    <h1>Monster Builder</h1>

    <form @submit="handleSubmit">

      <!-- Name -->
      <label for="name">Name</label>
      <input required v-model="name"
      type="text"
      name="name"
      value="">

      <br/>

      <!-- Size -->
      <label for="size">Size</label>
      <select v-model="size"
      name="size">
        <option value="0">Tiny</option>
        <option value="1">Small</option>
        <option value="2">Medium</option>
        <option value="3">Large</option>
        <option value="4">Huge</option>
        <option value="5">Gargantuan</option>
      </select>

      <br/>

      <!-- Type -->
      <label for="monster-type">Monster Type</label>
      <select v-model="monsterType"
      name="monster-type">
        <option value="aberration">Aberration</option>
        <option value="beast">Beast</option>
        <option value="celestial">Celestial</option>
        <option value="construct">Construct</option>
        <option value="dragon">Dragon</option>
        <option value="elemental">Elemental</option>
        <option value="fey">Fey</option>
        <option value="fiend">Fiend</option>
        <option value="giant">Giant</option>
        <option value="humanoid">Humanoid</option>
        <option value="monstrosity">Monstrosity</option>
        <option value="ooze">Ooze</option>
        <option value="plant">Plant</option>
        <option value="undead">Undead</option>
      </select>

      <br/>

      <!-- Alignment -->
      <label for="alignment-lawful">Alignment</label>
      <select v-model="alignmentLaw"
      name="alignment-lawful">
        <option value="1">Lawful</option>
        <option value="2">True</option>
        <option value="3">Chaotic</option>
      </select>
      <select v-model="alignmentMoral"
      name="alignment-moral">
        <option value="1">Good</option>
        <option value="2">Neutral</option>
        <option value="3">Evil</option>
      </select>

      <br/>


      <!-- Armor Class -->
      <label for="armor-class">Armor Class (number)</label>
      <input required v-model="armorClass"
      type="number"
      name="armor-class"
      value="">

      <br/>

      <!-- Hit Points -->
      <label>Hit Points</label>
      <input required v-model="hitPoints"
      type="number"
      name="hit-points"
      value="">

      <br/>

      <!-- Speed -->
      <label for="speed">Speed</label>
      <input required v-model="speed" type="number" name="speed" value="" step="5" min="0">
      <label for="swim-speed">Swim Speed</label>
      <input required v-model="swimSpeed" type="number" name="speed" value="" step="5" min="0">
      <label for="fly-speed">Fly Speed</label>
      <input required v-model="flyingSpeed" type="number" name="speed" value="" step="5" min="0">
      <label for="burrowing-speed">Burrowing Speed</label>
      <input required v-model="burrowingSpeed" type="number" name="speed" value="" step="5" min="0">

      <br/>

      <!-- Attributes -->
      <label for="str">STR</label>
      <input required v-model="str" type="number" name="str" value="" min="0" max="30">
      <label for="dex">DEX</label>
      <input required v-model="dex" type="number" name="dex" value="" min="0" max="30">
      <label for="con">CON</label>
      <input required v-model="con" type="number" name="con" value="" min="0" max="30">
      <label for="int">INT</label>
      <input required v-model="int" type="number" name="int" value="" min="0" max="30">
      <label for="wis">WIS</label>
      <input required v-model="wis" type="number" name="wis" value="" min="0" max="30">
      <label for="cha">CHA</label>
      <input required v-model="cha" type="number" name="cha" value="" min="0" max="30">

      <br/>

      <!-- Saves -->
      <MonsterAttrListForm
      :formName="'save'"
      :formFields="{attribute: 'str', bonus: 0}"
      @add-save="addSave" />

      <br/>

      <div class="save-container">
        <span v-for="s in Object.keys(saves)"
        @click="removeSave(s)">
          {{s.toUpperCase()}}[{{saves[s] > 0 ? '+' : null}}{{saves[s]}}]
          <br/>
        </span>
      </div>


      <!-- Skills Form -->
      <MonsterSkillsListForm
      :skills="skills"
      @add-skill="addSkill" />

      <!-- Senses -->
      <MonsterAttrListForm
      :formName="'sense'"
      :formFields="{name: '', range: 0}"
      :useTags="true"
      @add-sense="addSense"
      />

      <div class="senses-container">
        <span v-for="sense in senses"
        @click="removeSense(sense)">
          {{sense.name}} ({{sense.range}}ft)
          <br/>
        </span>
      </div>

      <br/>

      <!-- Languages -->
      <MonsterAttrListForm
      :formName="'language'"
      :formFields="{name: ''}"
      @add-language="addLanguage"/>

      <br/>

      <div class="languages-container">
        <span v-for="language in languages"
        @click="removeLanguage(language)">
          {{language}}
          <br/>
        </span>
      </div>

      <br/>

      <!-- Challenge Rating -->
      <label for="challenge-rating">Challenge Rating</label>
      <select v-model="challengeRating" name="challenge-rating">
        <option value="0">0</option>
        <option value="0.125">1/8</option>
        <option value="0.25">1/4</option>
        <option value="0.5">1/2</option>
        <option v-for="i in Array(30).keys()" :value="i + 1">{{i + 1}}</option>
      </select>

      <br/>

      <!-- Environments -->
      <MonsterAttrListForm
      :formName="'environment'"
      :formFields="{name: ''}"
      @add-environment="addEnvironment" />

      <br/>

      <div class="environments-container">
        <span v-for="environment in environments"
        @click="removeEnvironment(environment)">
          {{environment}}
          <br/>
        </span>
      </div>

      <br/>

      <!-- Description -->
      <label for="description">Description</label>
      <input required v-model="description" type="text" name="description" value="">

      <br/>

      <input type="submit" name="submit" value="Submit">

    </form>

  </div>
</template>

<script>
import fetchService from '@/fetchService'
import MonsterAttrListForm from '@/components/MonsterAttrListForm'
import MonsterSkillsListForm from '@/components/MonsterSkillsListForm'

export default {
  name: 'EnemyBuilderMain',
  components: {
    MonsterAttrListForm,
    MonsterSkillsListForm
  },
  data() {
    return {
      id: 0,
      name: "",
      size: 2,
      monsterType: "humanoid",
      alignmentMoral: 1,
      alignmentLaw: 1,
      armorClass: 10,
      hitPoints: 10,
      speed: 30,
      swimSpeed: 15,
      flyingSpeed: 0,
      burrowingSpeed: 0,
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10,
      saves: {},
      strSave: 0,
      dexSave: 0,
      conSave: 0,
      intSave: 0,
      wisSave: 0,
      chaSave: 0,
      skills: [],
      challengeRating: '0',
      description: '',
      languages: [],
      environments: [],
      // senses
      senses: [],
      senseName: '',
      senseRange: 60,
    }
  },

  created() {
    // if this template was reached through a specific monster edit, fill out details
    if (this.$route.params.monsterId) {
      fetchService.monster(this.$route.params.monsterId)
      .then(m => {
        Object.keys(m).forEach(key => this[key] = m[key])
      })
    }
  },

  methods: {

    handleSubmit(e) {
      e.preventDefault()
      const {name, alignmentMoral, alignmentLaw, challengeRating, armorClass, hitPoints, id} = this
      const m = {name, alignmentMoral, alignmentLaw, challengeRating, armorClass, hitPoints}
      // console.log(id)
      if (id <= 0) {
        fetchService.postMonster(m)
        .then(console.log)
      } else {
        m.id = id
        fetchService.patchMonster(m)
        .then(() => this.$store.dispatch('editMatchingMonsters', m))
      }
    },

    addSave(newSave) {
      this.saves[newSave.attribute] = newSave.bonus
      this.saves = {...this.saves}
    },

    removeSave(saveName) {
      this.saves[saveName] = false
    },

    addSkill(newSkill) {
      this.skills = this.skills.filter(s => s.name !== newSkill.name)
      this.skills.push(newSkill)
    },

    removeSkill(skill) {
      this.skills = this.skills.filter(s => s !== skill)
    },

    addSense(formData) {
      this.senses = this.senses.filter(s => s.name !== formData.name)
      this.senses.push({...formData})
    },

    removeSense(sense) {
      this.senses = this.senses.filter(s => s !== sense)
    },

    addLanguage(formData) {
      if (!this.languages.includes(formData.name)) {
        this.languages.push(formData.name)
      }
    },

    removeLanguage(language) {
      this.languages = this.languages.filter(l => l !== language)
    },

    addEnvironment(formData) {
      if (!this.environments.includes(formData.name)) {
        this.environments.push(formData.name)
      }
    },

    removeEnvironment(environment) {
      this.environments = this.environments.filter(l => l !== environment)
    },

  }
}
</script>

<style lang="scss" scoped>
</style>
