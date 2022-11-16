import Login from '../components/Login'

const Signin = (props) => {
  return (
    <div className="signin">
      <h2>Sign In</h2>
      <Login
        setUser={props.setUser}
        toggleAuthenticated={props.toggleAuthenticated}
      />
    </div>
  )
}

export default Signin
