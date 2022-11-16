import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'

const ReviewForm = (props) => {
  const [formState, setFormState] = useState({
    body: '',
    breweryId: props.breweryId,
    authorId: ''
  })

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
        alert(error)
      })
    setFormState({
      body: '',
      breweryId: props.breweryId,
      authorId: ''
    })
  }

  const initForm = () => {
    if (props.user) {
      setFormState({ ...formState, authorId: props.user.id })
      document.getElementById('review_form').style.display = ''
    } else {
      document.getElementById('review_form').style.display = 'none'
    }
  }

  useEffect(() => {
    initForm()
  }, [props.user])

  return (
    <form id="review_form" onSubmit={handleSubmit}>
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
