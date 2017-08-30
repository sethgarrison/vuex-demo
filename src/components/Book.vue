<template>
  <div class="book-container">
    <img :src="book.image" alt="">
    <div class="details">
      <h2>{{book.title}}</h2>
      <h3>{{book.price}}</h3>
      <button @click="$emit('addToCart', book)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vxBook',
    props: ['book']
  }
</script>


<style lang="scss">
  .book-container {
    display: flex;
    height: 300px;
    margin: 20px 0;
    img {
      height: 100%;
      width: auto;
    }
  }

  .details {
    margin-left: 20px;
    text-align: left;
  }


</style>
