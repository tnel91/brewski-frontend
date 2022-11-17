import { useState } from 'react'
import axios from 'axios'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import ErrorMsg from './ErrorMsg'

const Login = (props) => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })
  const [isError, toggleIsError] = useState(false)
  let navigate = useNavigate()

  const handleChange = (event) => {
    const input = event.target

    setFormState({
      ...formState,
      [input.id]: input.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const signedIn = await SignInUser({
        email: formState.email,
        password: formState.password
      })

      props.setUser(signedIn)
      props.toggleAuthenticated(true)
      toggleIsError(false)
      navigate('/breweries')
    } catch (err) {
      toggleIsError(true)
    }

    setFormState({
      email: '',
      password: ''
    })
  }

  return (
    <div className="login">
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

        <button type="submit">Sign In</button>
      </form>

      {isError && <ErrorMsg msg="Wrong email or password!" />}
    </div>
  )
}

export default Login
