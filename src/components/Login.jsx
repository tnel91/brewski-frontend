import { useState } from 'react'
import axios from 'axios'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })
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

    const signedIn = await SignInUser ({
      email: formState.email,
      password: formState.password
    })
    
    console.log(formState) 
    setFormState({
      email: '',
      password: ''
    })
    
    props.setUser(signedIn)
    props.toggleAuthenticated(true)
    navigate('/breweries')
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
    </div>
  )
}

export default Login
