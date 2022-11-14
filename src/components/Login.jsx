import { useState } from 'react'

const Login = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const input = event.target

    setFormState({
      ...formState,
      [input.id]: input.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // login
    console.log(formState)

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
    </div>
  )
}

export default Login
