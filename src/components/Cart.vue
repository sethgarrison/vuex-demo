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
        <span>Total Price: {{totalPrice}}</span>
      </div>
    </div>

  </div>
</template>

<script>
  import book from '@/components/Book'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'vxCart',
    components: {
      'vxBook': book
    },
    computed: {
      ...mapGetters([
        'cart',
        'totalPrice',
        'itemCount'
      ])
    },
    methods: {
      ...mapActions([
        'removeFromCart'
      ])
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
