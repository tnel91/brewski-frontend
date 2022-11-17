import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'

const ReviewForm = (props) => {
  let navigate = useNavigate()

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
        })
        .catch((error) => {
          alert(error)
        })
      setFormState({ ...formState, body: '' })
      navigate('/profile')
    } else {
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
      navigate('/profile')
    }
  }

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
          } else {
            setFormState({
              body: '',
              breweryId: props.breweryId,
              authorId: props.user.id
            })
          }
        })
        .catch((error) => {
          alert(error)
        })
    } else {
      document.getElementById('review_form').style.display = 'none'
    }
  }

  useEffect(() => {
    initForm()
  }, [props.user, props.breweryId])

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
      </fieldset>
    </form>
  )
}

export default ReviewForm
