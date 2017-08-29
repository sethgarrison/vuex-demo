<template>
  <div>
    <h1>Items for sale!</h1>

    <div class="book_list_container">
      <vx-book
        v-for="book in books"
        @addToCart="addToCart(book)"
        :book="book"
        :key="book.id">
      </vx-book>
    </div>
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
        'addToCart'
      ])
    }
  }
</script>
