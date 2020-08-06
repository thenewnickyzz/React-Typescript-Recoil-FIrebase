// src/components/SignInForm.tsx

import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core'
import firebaseApp from '../firebase'
import authState from '../store/atoms/authState'

const useStyles = makeStyles((theme) =>
  createStyles({
    link: {
      color: 'white',
      paddingRight: theme.spacing(2),
      textDecoration: 'none',
    },
    grow: {
      flexGrow: 1,
    },
    signOutButton: {
      marginLeft: theme.spacing(2),
    },
  })
)

const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useRecoilState(authState)
  const classes = useStyles()

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      setLoggedInUser({ userEmail: user?.email || '' })
    })
  })

  const onSignOut = () => {
    firebaseApp.auth().signOut()
  }

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography>
            <Link className={classes.link} to="/">
              Library
            </Link>
          </Typography>

          {loggedInUser.userEmail && (
            <Typography>
              <Link className={classes.link} to="/add-book">
                Add New Book
              </Link>
            </Typography>
          )}
          <div className={classes.grow}></div>
          {!loggedInUser.userEmail && (
            <Typography>
              <Link className={classes.link} to="/sign-in">
                Sign In
              </Link>
            </Typography>
          )}
          {loggedInUser.userEmail && (
            <>
              <Typography>Welcome Back {loggedInUser.userEmail}</Typography>
              <Button
                className={classes.signOutButton}
                color="secondary"
                onClick={onSignOut}
              >
                Sign Out
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navigation
