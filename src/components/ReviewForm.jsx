import { useState } from 'react'

const ReviewForm = () => {
  const initialState = {
    body: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    //Submit logic here
    console.log('submitted')
    //
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
