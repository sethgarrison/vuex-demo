const cart = {
  items: [],
  total: 0,
  addToCart (item) {
    const itemInCart = this.items.find((i) => i.id === item.id)
    if (itemInCart) {
      itemInCart.quantity++
    } else {
      item.quantity = 1
      this.items.push(item)
    }
  },
  removeFromCart (item) {
    this.items = this.items.filter((book) => item.id !== book.id)
  }
}

export default cart
