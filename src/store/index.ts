import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    values: {
      name: 'John Doe'
    }
  },
  getters: {
  },
  mutations: {
    setValues (state, values) {
      state.values = values
    }
  },
  actions: {
  },
  modules: {
  }
})
