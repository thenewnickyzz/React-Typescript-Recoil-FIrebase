// src/components/SignInForm.tsx

import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import firebaseApp from '../firebase'
import { useHistory } from 'react-router-dom'

const SignInForm = () => {
  const history = useHistory()

  const [fields, setFields] = useState({
    email: '',
    password: '',
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
      await firebaseApp
        .auth()
        .signInWithEmailAndPassword(fields.email, fields.password)

      history.push('/')
    } catch (err) {
      // Error handling
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Email"
        name="email"
        value={fields.email}
        onChange={onChange}
        variant="filled"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        name="password"
        value={fields.password}
        onChange={onChange}
        variant="filled"
        type="password"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit">
        Sign In
      </Button>
    </form>
  )
}

export default SignInForm
