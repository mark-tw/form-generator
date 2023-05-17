<template>
  <div>
    <form>
      <div v-for="(field, i) in fields" :key="i">
        <label :for="field.id">{{ field.label }}</label>
        <slot :name="field.id">
          <input v-if="field.type === 'text'" type="text" :id="field.id" v-model="value[field.id]">
          <select v-if="field.type === 'select'" :id="field.id" v-model="value[field.id]">
            <option v-for="option in field.options" :key="option.value" :value="option.value">{{ option.label }}</option>
          </select>
          <textarea v-if="field.type === 'textarea'" :id="field.id" v-model="value[field.id]"></textarea>
          <input v-if="field.type === 'checkbox'" type="checkbox" :id="field.id" v-model="value[field.id]">
        </slot>
      </div>
      <button type="button" @click="save">Save</button>
      <button type="button" @click="cancel">Cancel</button>
    </form>
  </div>
</template>

<script>

export default {
  props: {
    fields: Array,
    value: Object
  },
  methods: {
    save () {
      this.$emit('save', this.value) // событие сохранения формы
    },

    cancel () {
      console.log(this.fields)
      this.$emit('cancel') // событие отмены формы
    }
  }
}

</script>

<style scoped>

</style>
