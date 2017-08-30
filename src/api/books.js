import axios from 'axios'

const serverUrl = 'https://now-project-ttlgufimia.now.sh'

const bookApi = {
  getBooks () {
    return axios.get(`${serverUrl}/books`)
  },
  addBook (book) {
    return axios.post(`${serverUrl}/books`, book)
  },
  removeBook (book) {
    return axios.delete(`${serverUrl}/books/${book.id}`)
  }
}

export default bookApi
