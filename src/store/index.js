import Vue from 'vue'
import Vuex from 'vuex'
import lodash from 'lodash'

Vue.use(Vuex)

const state = {
  cart: {
    items: [],
    totalPrice: 0
  }
}

const getters = {
  cart: state => state.cart,
  totalPrice: state => state.cart.totalPrice,
  itemCount: state => lodash.reduce(state.cart.items, (sum, item) => sum + item.quantity, 0)
}

const actions = {
  addToCart ({ commit }, item) {
    const itemInCart = state.cart.items.find((i) => i.id === item.id)
    if (itemInCart) {
      itemInCart.quantity++
    } else {
      item.quantity = 1
      state.cart.items.push(item)
    }
    commit('cartUpdated', state.cart)
  },
  removeFromCart ({ commit }, item) {
    state.cart.items = state.cart.items.filter(i => i.id !== item.id)
    commit('cartUpdated', state.cart)
  }
}

const mutations = {
  cartUpdated (state, cart) {
    state.cart = {...state.cart, cart}
    state.cart.totalPrice = lodash.reduce(state.cart.items, (sum, item) => sum + item.quantity * item.price, 0)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
