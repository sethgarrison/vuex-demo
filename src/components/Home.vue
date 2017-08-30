<template>
  <div>
    <h1>My Bookstore</h1>

    <div class="bookstore_container">
      <vx-shop
        class="shop-container">
      </vx-shop>

      <vx-cart
        v-bind:class="{cartOpened: 'open'}"
        class="cart-container">
      </vx-cart>
    </div>

  </div>
</template>

<script>
  import cart from './Cart.vue'
  import shop from './Shop.vue'

  export default {
    name: 'home',
    components: {
      'vxCart': cart,
      'vxShop': shop
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .bookstore_container {
    display: flex;
  }

  .shop-container {
    width: 50%;
  }

  .cart-container {
    width: 50%;
  }

</style>
