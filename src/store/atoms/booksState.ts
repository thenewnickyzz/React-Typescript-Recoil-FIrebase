// src/store/atoms/booksState.ts

import { atom } from 'recoil'
import Book from '../types/Book'

const booksState = atom<Book[]>({
  key: 'books-state',
  default: [] as Book[],
})

export default booksState
