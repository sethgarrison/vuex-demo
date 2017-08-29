const state = {
  cart: {
    totalCost: 0,
    items: []
  }
}

const getters = {
  cart: state => state.cart
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
    state.cart.items = state.cart.items.filter((book) => item.id !== book.id)
    commit('cartUpdated', state.cart)
  }
}

const mutations = {
  cartUpdated (cart) {
    state.cart = {...state.cart, ...cart}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
