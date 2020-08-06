// src/components/AddBookForm.tsx

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import firebaseApp from '../firebase'
import Book from '../store/types/Book'

const AddBookForm = () => {
  const history = useHistory()
  const [fields, setFields] = useState({
    name: '',
    description: '',
    authorFirstName: '',
    authorLastName: '',
    featuredImage: '',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const newBook: Book = {
        name: fields.name,
        description: fields.description,
        featuredImage: fields.featuredImage,
        author: {
          firstName: fields.authorFirstName,
          lastName: fields.authorLastName,
        },
      }
      await firebaseApp.firestore().collection('books').add(newBook)
    } catch (err) {
      // Error handling
    }
    history.push('/')
  }

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Name"
        name="name"
        value={fields.name}
        onChange={onChange}
        variant="filled"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        name="description"
        multiline
        rows={5}
        value={fields.description}
        onChange={onChange}
        variant="filled"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Author First Name"
        name="authorFirstName"
        value={fields.authorFirstName}
        onChange={onChange}
        variant="filled"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Author Last Name"
        name="authorLastName"
        value={fields.authorLastName}
        onChange={onChange}
        variant="filled"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Featured Image"
        name="featuredImage"
        value={fields.featuredImage}
        onChange={onChange}
        variant="filled"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit">
        Add Book
      </Button>
    </form>
  )
}

export default AddBookForm
