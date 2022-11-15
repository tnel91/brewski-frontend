import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();

  return (
    <div className="profile">
      <div className="info-card">
      <h2>User Profile</h2>
      <div id="user">
        <h4>Email:</h4>
        <h4>Reviews Written:</h4>
        <h4>Last Seen:</h4>
      </div>
      </div>
      <div className="review-cardfav">
        <h2>Favorite Reviews</h2>
        <div id="fav-reviews">
          <h4>Example Review Title: Fifth Hammer Brewing Company</h4>
          <p>Example Review Post: I recently went to Fifth Hammer Brewing Company this past weekend.  The place was fantastic, they had an amazing assortment of beers to choose from. 
            I highly recommend the Functional Modern for an IPA lover and the Break of Jawn if you're into Belgian Wheat styled beers.  Can't wait to go back! </p>
        </div>
      </div>
      <div className="review-card">
        <h2>Your Reviews</h2>
        <div id="your-reviews">
        <h4>Example Review Title: Fifth Hammer Brewing Company</h4>
          <p>Example Review Post: I recently went to Fifth Hammer Brewing Company this past weekend.  The place was fantastic, they had an amazing assortment of beers to choose from. 
            I highly recommend the Functional Modern for an IPA lover and the Break of Jawn if you're into Belgian Wheat styled beers.  Can't wait to go back! </p>

            <h4>Example Review Title: Captain Lawrence Brewing Company</h4>
            <p>CL Brewing Co was a great experience!  Can't wait to head back for my CL beers and treats!</p>
        </div>
      </div>
      <div className="user-button">
      <button id="user-button" onClick={() => navigate('/breweries')}>Write a New Review</button>
      </div>
    </div>
  )
}

export default Profile
