// src/components/Book.tsx

import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import IBook from '../store/types/Book'

const Book: React.FC<IBook> = (props) => {
  const { name, description, author, featuredImage } = props

  const authorFullName = `${author.firstName} ${author.lastName}`

  return (
    <Card>
      <CardMedia component="img" src={featuredImage} />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          by {authorFullName}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
    </Card>
  )
}

export default Book
