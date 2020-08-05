import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) =>
  createStyles({
    link: {
      color: 'white',
      paddingRight: theme.spacing(2),
      textDecoration: 'none',
    },
  })
)

const Layout: React.FC = (props) => {
  const classes = useStyles()

  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography>
              <Link className={classes.link} to="/">
                Library
              </Link>
            </Typography>
            <Typography>
              <Link className={classes.link} to="/sign-in">
                Sign In
              </Link>
            </Typography>
            <Typography>
              <Link className={classes.link} to="/add-book">
                Add New Book
              </Link>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Box>{props.children}</Box>
      </Container>
    </div>
  )
}

export default Layout
