<template>
  <div class="hello">
    <div>
      <form-generator :fields="fields" v-model="dataValues" @save="onSave" @cancel="onCancel">
        <template v-slot:text-field="{ field }">
          <input type="text" :id="field.id" v-bind="$attrs" v-on="$listeners">
        </template>
      </form-generator>
    </div>
  </div>
</template>

<script>

import FormGenerator from './form-generator'
export default {
  data () {
    return {
      dataValues: null,
      fields: [
        {
          id: 'name',
          type: 'text',
          label: 'Name'
        },
        {
          id: 'email',
          type: 'text',
          label: 'Email'
        },
        {
          id: 'gender',
          type: 'select',
          label: 'Gender',
          options: [
            {
              value: 'male',
              label: 'Male'
            },
            {
              value: 'female',
              label: 'Female'
            }
          ]
        },
        {
          id: 'message',
          type: 'textarea',
          label: 'Message'
        },
        {
          id: 'subscribe',
          type: 'checkbox',
          label: 'Subscribe to newsletter'
        }
      ]
    }
  },
  components: {
    FormGenerator
  },
  created () {
    this.dataValues = {
      ...this.$store.state.values
    }
  },
  methods: {
    onSave (values) {
      this.$store.commit('setValues', values)
    },

    onCancel () {
      this.dataValues = this.$store.state.values
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
