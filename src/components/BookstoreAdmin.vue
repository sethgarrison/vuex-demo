<template>
  <div>
    <h1>Book Admin</h1>

    <div class="book_list_container">
      <vx-book
        v-for="book in books"
        :view-only="false"
        @removeBook="removeBook(book)"
        :book="book"
        :key="book.id">
      </vx-book>

      <button @click="initNewBook()">Add Book</button>
    </div>

    <vx-book
      v-if="newBook"
      @addBook="addNewBook"
      :book="newBook"
      :view-only="false">

    </vx-book>
  </div>
</template>

<script>
  import book from '@/components/Book'

  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'vxShop',
    components: {
      'vx-book': book
    },
    data () {
      return {
        newBook: undefined
      }
    },
    computed: {
      ...mapGetters([
        'books'
      ])
    },
    created () {
      this.$store.dispatch('getBooks')
    },
    methods: {
      ...mapActions([
        'addBook',
        'removeBook'
      ]),
      initNewBook () {
        this.newBook = {
          title: '',
          price: 0,
          image: ''
        }
      },
      addNewBook (book) {
        this.addBook(book)
        this.newBook = undefined
      }
    }
  }
</script>
