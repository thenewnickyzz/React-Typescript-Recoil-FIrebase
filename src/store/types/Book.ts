// src/store/types/Books.tsx

import Author from './Author'

interface Book {
  name: string
  description: string
  author: Author
  featuredImage: string
}

export default Book
