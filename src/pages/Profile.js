import React from 'react'
// import { useNavigate } from 'react-router-dom'
import AuthError from '../components/AuthError'

const Profile = (props) => {
  // let navigate = useNavigate()

  return (
    <div className="profile">
      {props.authenticated ? (
        <div className="profile">
          <div className="info-card">
            <h2>User Profile</h2>
            <div id="user">
              <h4>Email: {props.user.email}</h4>
            </div>
          </div>
        </div>
      ) : (
        <AuthError />
      )}
    </div>
  )
}

export default Profile
