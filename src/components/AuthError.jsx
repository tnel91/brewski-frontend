import { useNavigate } from 'react-router-dom'

const AuthError = () => {
  let navigate = useNavigate()

  return (
    <div className="auth-error">
      <h2>Please register or sign in!</h2>

      <div className="buttons">
        <button id="button" onClick={() => navigate('/signin')}>
          Sign In
        </button>

        <button id="button" onClick={() => navigate('/register')}>
          Register
        </button>
      </div>
    </div>
  )
}

export default AuthError
