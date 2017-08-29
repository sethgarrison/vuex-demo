<template>
  <div>
    <h1>Your Cart</h1>

    <ul>
      <li v-for="item in cart.items">
        <span>{{item.title}}</span>
        <span>{{item.quantity}} * {{item.price}}</span>
      </li>
    </ul>

    <div>
      <span>Total Price: {{totalPrice}}</span>
    </div>

  </div>
</template>

<script>
  import lodash from 'lodash'
  import book from '@/components/Book'
  import cart from '@/api/cart'

  export default {
    name: 'vxCart',
    components: {
      'vxBook': book
    },
    data () {
      return {
        cart: cart
      }
    },
    computed: {
      totalPrice() {
      }
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

<style scoped>
  ul {
    list-style-type: none;
  }
  ul, li {
    padding: 0;
    margin: 0;
  }
</style>
