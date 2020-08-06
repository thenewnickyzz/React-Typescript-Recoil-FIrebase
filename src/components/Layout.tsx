// src/components/Layout.tsx

import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Navigation from './Navigation'

const Layout: React.FC = (props) => {
  return (
    <div>
      <Navigation />
      <Container>
        <Box p={4}>{props.children}</Box>
      </Container>
    </div>
  )
}

export default Layout
