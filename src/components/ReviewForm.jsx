import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'

const ReviewForm = (props) => {
  const [formState, setFormState] = useState({
    body: '',
    breweryId: props.breweryId,
    authorId: ''
  })

  const [formLayout, setFormLayout] = useState({
    legend: 'Create Review',
    buttonText: 'Submit Review',
    updateForm: false,
    reveiwId: null
  })

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (formLayout.updateForm === true) {
      await axios
        .put(`${BASE_URL}/reviews/edit/${formLayout.reveiwId}`, formState)
        .then(() => {
          props.getReviews()
          // initForm()
        })
        .catch((error) => {
          console.log(error)
        })
      setFormState({ ...formState, body: '' })
    } else {
      await axios
        .post(`${BASE_URL}/reviews/new`, formState)
        .then(() => {
          props.getReviews()
          // initForm()
        })
        .catch((error) => {
          console.log(error)
        })
      setFormState({
        body: '',
        breweryId: props.breweryId,
        authorId: ''
      })
    }
  }

  const handleDelete = async (event) => {
    event.preventDefault()
    await axios
      .delete(`${BASE_URL}/reviews/delete/${formLayout.reveiwId}`)
      .then(() => {
        props.getReviews()
        // initForm()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    const initForm = async () => {
      if (props.user) {
        document.getElementById('review_form').style.display = ''
        await axios
          .get(`${BASE_URL}/reviews/${props.breweryId}/${props.user.id}`)
          .then((response) => {
            if (response.data) {
              setFormState({
                body: response.data.body,
                breweryId: props.breweryId,
                authorId: props.user.id
              })
              setFormLayout({
                legend: 'Update Review',
                buttonText: 'Update Review',
                updateForm: true,
                reveiwId: response.data.id
              })
              document.getElementById('delete_button').style.display = ''
            } else {
              setFormState({
                body: '',
                breweryId: props.breweryId,
                authorId: props.user.id
              })
              setFormLayout({
                legend: 'Create Review',
                buttonText: 'Submit Review',
                updateForm: false,
                reveiwId: response.data.id
              })
              document.getElementById('delete_button').style.display = 'none'
            }
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        document.getElementById('review_form').style.display = 'none'
      }
    }

    initForm()
  }, [props.user, props.breweryId, props.reviews])

  return (
    <form id="review_form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>{formLayout.legend}</legend>
        <textarea
          id="body"
          placeholder="Review"
          onChange={handleChange}
          value={formState.body}
          required
        ></textarea>
        <button type="submit">{formLayout.buttonText}</button>
        <button id="delete_button" type="button" onClick={handleDelete}>
          Delete Review
        </button>
      </fieldset>
    </form>
  )
}

export default ReviewForm
