<template>
  <div>
    <h1>Items for sale!</h1>

    <div class="book_list_container">
      <vx-book
        v-for="book in books"
        @addToCart="addToCart"
        @removeFromCart="removeFromCart"
        :book="book"
        :key="book.image">
      </vx-book>
    </div>
  </div>
</template>

<script>
  import bookstore from '@/api/books'
  import cart from '@/api/cart'
  import book from '@/components/Book'

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
    created () {
      this.books = bookstore.getBooks()
    },
    methods: {
      addToCart (book) {
        cart.addToCart(book)
      },
      removeFromCart (book) {
        cart.removeFromCart(book)
      }
    }
  }
</script>
