import bookApi from '@/api/books'

const state = {
  books: []
}

const getters = {
  books: state => state.books
}

const actions = {
  async addBook ({ commit }, book) {
    const res = await bookApi.addBook(book)
    commit('bookAdded', res.data)
  },
  async getBooks ({ commit }) {
    const res = await bookApi.getBooks()
    commit('gotBooks', res.data)
  }
}

const mutations = {
  bookAdded (state, book) {
    state.books.push(book)
  },
  gotBooks (state, books) {
    state.books = books
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
