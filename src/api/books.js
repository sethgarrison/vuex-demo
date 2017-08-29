const books = [
  {
    title: 'Who Fears Death',
    id: 1,
    image: 'https://images-na.ssl-images-amazon.com/images/I/41eUhJG7m5L._SY346_.jpg',
    price: 20
  },
  {
    title: 'Akata Witch',
    id: 2,
    image: 'https://images-na.ssl-images-amazon.com/images/I/518EMv8qmvL._SY346_.jpg',
    price: 20
  },
  {
    title: 'The Stone Sky',
    id: 3,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61DLtM3O9tL._SY346_.jpg',
    price: 20
  },
  {
    title: 'Nine Princes in Amber',
    id: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51Vp-z8%2BPOL._SY346_.jpg',
    price: 20
  },
  {
    title: 'Women on the Edge of Time',
    id: 5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/41Tu5MjgFUL._SY346_.jpg',
    price: 20
  }
]

const service = {
  getBooks () {
    return books
  }
}

export default service
