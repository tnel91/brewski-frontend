import React from 'react'
import { useNavigate } from 'react-router-dom'
import DemoLogin from '../components/DemoLogin'

const Home = (props) => {
  let navigate = useNavigate()

  return (
    <div className="home">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#EDAE49"
          fillOpacity="1"
          d="M0,64L48,80C96,96,192,128,288,154.7C384,181,480,203,576,181.3C672,160,768,96,864,96C960,96,1056,160,1152,202.7C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <img
        className="home-picture"
        src="https://i.imgur.com/doHIjDt.png"
        alt="brewski logo"
      />
      <div className="writing">
        <h2>Welcome to Brewski!</h2>
        <p>
          Brewski is an online application that allows you to review Breweries
          around the world! <br></br> This application shares your review with
          thousands of members in real time and allows you to save reviews of
          Breweries you find interesting!{' '}
        </p>
      </div>
      {!props.authenticated && (
        <div className="home-buttons">
          <button id="button" onClick={() => navigate('/signin')}>
            Sign In
          </button>
          <button id="button" onClick={() => navigate('/register')}>
            Register
          </button>
          <DemoLogin
            setUser={props.setUser}
            toggleAuthenticated={props.toggleAuthenticated}
          />
        </div>
      )}
      <div className="home2">
        <img
          className="pic1"
          src="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/CwyNjYZJWmvmEs9vgVHcov1XpfU=/1660x934/filters:focal(2007x3531:2017x3521):no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/JBCC4KTD4FDCHFLACMTQTW4GBE.jpg"
          alt="beer review"
        />
        <img
          className="pic2"
          src="https://s3.amazonaws.com/images.gearjunkie.com/uploads/2021/11/DN5A4037-2400x1600.jpg"
          alt="beer review"
        />
      </div>
    </div>
  )
}

export default Home
