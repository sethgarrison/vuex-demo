import Vue from 'vue'
import Vuex from 'vuex'

import bookStore from './bookstore'
import cartStore from './cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: [
    bookStore,
    cartStore
  ]
})
