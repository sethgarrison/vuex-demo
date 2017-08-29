import axios from 'axios'

const serverUrl = 'https://now-project-grynpfdqqi.now.sh'

export default {
  getBooks () {
    return axios.get(`${serverUrl}/books`)
  },
  addBook (book) {
    return axios.post(`${serverUrl}/books`, { book })
  }
}
