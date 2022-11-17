import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import ErrorMsg from './ErrorMsg'

const Signup = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isError, toggleIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
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
    // only register when both passwords match
    if (
      formState.password &&
      formState.confirmPassword &&
      formState.password === formState.confirmPassword
    ) {
      //register
      try {
        await RegisterUser({
          email: formState.email,
          password: formState.password
        })
        toggleIsError(false)
        navigate('/signin')
      } catch (err) {
        setErrorMsg('Email already in use!')
        toggleIsError(true)
      }
    } else if (formState.password !== formState.confirmPassword) {
      setErrorMsg("Passwords don't match!")
      toggleIsError(true)
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

      {isError && <ErrorMsg msg={errorMsg} />}
    </div>
  )
}

export default Signup
