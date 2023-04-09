import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const DemoLogin = (props) => {
  let navigate = useNavigate()

  const demoLogin = async (event) => {
    event.preventDefault()
    try {
      const signedIn = await SignInUser({
        email: 'demouser@demo.com',
        password: 'password'
      })
      console.log('Demo Login')
      props.setUser(signedIn)
      props.toggleAuthenticated(true)
      navigate('/breweries')
    } catch (err) {
      props.toggleIsError(true)
      console.log(err)
    }
  }

  return <button onClick={demoLogin}>Use Demo Account</button>
}

export default DemoLogin
