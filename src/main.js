// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

// you have to do this before creating a store
Vue.use(Vuex)

const store = new Vuex.Store({
  // the state of the store
  state: {
    count: 0
  },
  // mutations on the store - these have to be synchronous
  mutations: {
    // state is a default argument of a mutation
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
})
