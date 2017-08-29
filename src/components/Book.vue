<template>
  <div class="book-container">
    <img :src="book.image" alt="">
    <div class="details" v-if="viewOnly">
      <h2>{{book.title}}</h2>
      <h3>{{book.price}}</h3>
      <button @click="$emit('addToCart', book)">Add to Cart</button>
    </div>

    <form @submit.prevent="$emit('addBook', book)" v-if="!viewOnly">
      <label>Title</label>
      <input type="text" v-model="book.title" placeholder="Title">
      <label>Price</label>
      <input type="number" v-model="book.price" placeholder="Price">
      <label>Image Url</label>
      <input type="text" v-model="book.image" placeholder="Image Url">
      <button>Add Book</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'vxBook',
    props: ['book', 'viewOnly'],
    filters: {
      currency (value) {
        return `$ ${value}`
      }
    }
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
