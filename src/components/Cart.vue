<template>
  <div class="cart-container">
    <h1>Cart {{itemCount}}</h1>

    <div class="cart-contents">
      <ul>
        <li v-for="item in cart.items">
          <span>{{item.title}}</span>
          <span>{{item.quantity}} * {{item.price}}</span>
          <button @click="removeFromCart(item)">Remove From Cart</button>
        </li>
      </ul>

      <div>
        <span>Total Price: {{totalCost}}</span>
      </div>
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
        cart: cart,
        isOpen: true
      }
    },
    computed: {
      totalCost () {
        return lodash.reduce(this.cart.items, (sum, item) => sum + item.price * item.quantity, 0)
      },
      itemCount () {
        return this.cart.items.length
      }
    },
    methods: {
      addToCart (book) {
        cart.addToCart(book)
      },
      removeFromCart (book) {
        cart.removeFromCart(book)
      },
      close () {
        this.isOpen = false
      }
    }
  }
</script>

<style scoped lang="scss">
  ul {
    list-style-type: none;
  }
  ul, li {
    padding: 0;
    margin: 0;
  }

</style>
