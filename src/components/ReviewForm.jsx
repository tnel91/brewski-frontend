import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../globals'

const ReviewForm = (props) => {
  const initialState = {
    body: '',
    breweryId: props.breweryId,
    // This needs to use Auth to get authorId
    authorId: 2
    //
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios
      .post(`${BASE_URL}/reviews/new`, formState)
      .then(() => {
        props.getReviews()
      })
      .catch((error) => {
        console.log(error)
      })
    setFormState(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create Review</legend>
        <textarea
          id="body"
          placeholder="Review"
          onChange={handleChange}
          value={formState.body}
          required
        ></textarea>
        <button type="submit">Submit Review</button>
      </fieldset>
    </form>
  )
}

export default ReviewForm
