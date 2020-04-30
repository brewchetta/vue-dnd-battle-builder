<template lang="html">
  <form @submit="handleSubmit" :class="`${formName}-form`">

    <label :for="`${formName}-name`">Add {{capitalizedName}}</label>

    <input v-for="attr in Object.keys(formState)" v-model="formState[attr]" type="text" :name="`${formName}-name`" value="">

    <input type="submit" :name="`${formName}-form-submit`" value="Submit">

  </form>
</template>

<script>
export default {
  name: 'MonsterAttrListForm',
  data() {
    return {
      formState: {...this.formFields}
    }
  },
  props: {
    // the attributes is an object that gets passed in as default formState
    formFields: {
      type: Object,
      required: true
    },
    formName: {
      type: String,
      required: true
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.$emit(`add-${this.formName}`, {...this.formState})
      this.formState = {...this.formFields}
    }
  },
  computed: {
    // TODO: add in brews-tools
    capitalizedName() {
      return this.formName[0].toUpperCase() + this.formName.slice(1)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
