import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
let navigate = useNavigate();

  return (
    <div className="home">
      <img src ="https://i.imgur.com/BlhTJn5.png" alt="brewski logo" />
      <div>
        <p>Welcome to Brewski!</p>
        <p>Brewski is an online application that allows you to review Breweries around the world!  This application shares your review with thousands of members in real time and allows you to save reviews of Breweries you find interesting!   </p>
      </div>
      <div className="home-button">
        <button onClick={() => navigate('/signin')}>Click Here To Sign In</button>
        <button onClick={() => navigate('/register')}>Click Here To Register</button>
      </div>
      <div className="home2">
      <img src ="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/CwyNjYZJWmvmEs9vgVHcov1XpfU=/1660x934/filters:focal(2007x3531:2017x3521):no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/JBCC4KTD4FDCHFLACMTQTW4GBE.jpg" alt="beer review" />
      <img src="https://s3.amazonaws.com/images.gearjunkie.com/uploads/2021/11/DN5A4037-2400x1600.jpg" alt="beer review" />
      </div>
    </div>
  )
}

export default Home
