import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import BooksPage from './pages/BooksPage'
import SignInPage from './pages/SignInPage'
import AddBookPage from './pages/AddBookPage'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/sign-in">
            <SignInPage />
          </Route>
          <Route path="/add-book">
            <AddBookPage />
          </Route>
          <Route path="/">
            <BooksPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
