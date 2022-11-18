import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = (props) => {
  let navigate = useNavigate()

  return (
    <div className="profile">
      <div className="info-card">
        <h2>User Profile</h2>
        <div id="user">
          <h4>Email: {props.user.email}</h4>
          <h4>Reviews Written:</h4>
          <h4>Last Seen:</h4>
        </div>
      </div>
      <div className="review-cardfav">
        <h2>Favorite breweries</h2>
        <div id="fav-reviews">
          <p>Your favorite breweries go here</p>
        </div>
      </div>
      <div className="review-card">
        <h2>Your Reviews</h2>
        <div id="your-reviews">
          <p>Your reviews go here</p>
        </div>
      </div>
      <div className="user-button">
        <button id="user-button" onClick={() => navigate('/breweries')}>
          Write a New Review
        </button>
      </div>
    </div>
  )
}

export default Profile
