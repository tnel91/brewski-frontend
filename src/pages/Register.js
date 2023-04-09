import Signup from '../components/Signup'

const Register = (props) => {
  return (
    <div className="register">
      <h2>Register</h2>
      <Signup
        setUser={props.setUser}
        toggleAuthenticated={props.toggleAuthenticated}
      />
    </div>
  )
}

export default Register
