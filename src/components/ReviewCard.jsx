import axios from 'axios'
import { useState } from 'react'

const ReviewCard = (props) => {
  const [author, setAuthor] = useState({})

  const getAuthor = async () => {}

  return (
    <div>
      <p>{props.body}</p>
    </div>
  )
}

export default ReviewCard
