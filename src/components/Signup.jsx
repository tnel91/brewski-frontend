import { useState } from 'react'

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

  const handleSubmit = (event) => {
    event.preventDefault()
    // only register when both passwords match
    if (
      formState.password &&
      formState.confirmPassword &&
      formState.password === formState.confirmPassword
    ) {
      //register
      console.log(formState)
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
          required
          onChange={(event) => handleChange(event)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formState.password}
          required
          onChange={(event) => handleChange(event)}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formState.confirmPassword}
          required
          onChange={(event) => handleChange(event)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Signup
