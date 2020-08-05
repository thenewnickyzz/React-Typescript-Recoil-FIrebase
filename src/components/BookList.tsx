// src/store/components/BookList.tsx

import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import Grid from '@material-ui/core/Grid'
import Book from './Book'
import booksState from '../store/atoms/booksState'
import firebaseApp from '../firebase'
import IBook from '../store/types/Book'

const BookList = () => {
  const [books, setBooks] = useRecoilState(booksState)

  useEffect(() => {
    firebaseApp
      .firestore()
      .collection('books')
      .onSnapshot((snapshot) => {
        const books = snapshot.docs.map((doc) => doc.data()) as IBook[]
        setBooks(books)
      })
  }, [])

  return (
    <Grid container spacing={4}>
      {books.map((book) => (
        <Grid key={book.name} item xs={12} sm={6} md={4}>
          <Book {...book} />
        </Grid>
      ))}
    </Grid>
  )
}

export default BookList
