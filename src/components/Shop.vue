<template>
  <div>
    <h1>Items for sale!</h1>

    <div class="book_list_container">
      <vx-book
        v-for="book in books"
        @addToCart="addToCart"
        :book="book"
        :key="book.image">
      </vx-book>
    </div>
  </div>
</template>

<script>
  import bookstore from '@/api/books'
  import book from '@/components/Book'
  import { mapActions } from 'vuex'

  export default {
    name: 'vxShop',
    components: {
      'vx-book': book
    },
    data () {
      return {
        books: []
      }
    },
    async created () {
      const res = await bookstore.getBooks()
      this.books = res.data
    },
    methods: {
      ...mapActions([
        'addToCart'
      ])
    }
  }
</script>
