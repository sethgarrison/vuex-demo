<template>
  <div>
    <h1>Books for sale!</h1>

    <div class="book_list_container">
      <vx-book
        v-for="book in books"
        :view-only="true"
        @addToCart="addToCart(book)"
        @removeBook="removeBook(book)"
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
        'addToCart'
      ])
    }
  }
</script>
