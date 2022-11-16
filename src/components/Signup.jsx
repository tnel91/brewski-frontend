import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { RegisterUser } from '../services/Auth'

const Signup = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (event) => {
    const input = event.target

    setFormState({
      ...formState,
      [input.id]: input.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // only register when both passwords match
    if (
      formState.password &&
      formState.confirmPassword &&
      formState.password === formState.confirmPassword
    ) {
      //register
      await RegisterUser ({
        email: formState.email,
        password: formState.password
      })
    }

    setFormState({
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formState.email}
          placeholder="Email"
          required
          onChange={(event) => handleChange(event)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formState.password}
          placeholder="Password"
          required
          onChange={(event) => handleChange(event)}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formState.confirmPassword}
          placeholder="Confirm Password"
          required
          onChange={(event) => handleChange(event)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Signup
