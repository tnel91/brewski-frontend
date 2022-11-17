import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReviewForm from '../components/ReviewForm'
import ReviewCard from '../components/ReviewCard'
import { BASE_URL } from '../globals'

const BreweryDetails = (props) => {
  const [brewery, setBrewery] = useState({
    name: '',
    address: '',
    beers: ['']
  })

  const [reviews, setReviews] = useState([])

  let { breweryId } = useParams()

  const getReviews = async () => {
    await axios
      .get(`${BASE_URL}/reviews/${breweryId}`)
      .then((response) => {
        setReviews(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getBrewery = async () => {
    await axios
      .get(`${BASE_URL}/brewery/${breweryId}`)
      .then((response) => {
        setBrewery(response.data)
        getReviews()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getBrewery()
  }, [breweryId])

  return (
    <div>
      <h1>{brewery.name}</h1>
      <h2>{brewery.address}</h2>
      <div className="beer_list">
        <p>
          <b>BEER LIST:</b>
        </p>
        {brewery.beers.map((beer, i) => (
          <p key={i}>{beer}</p>
        ))}
      </div>
      <section className="review_section">
        <ReviewForm
          breweryId={breweryId}
          getReviews={getReviews}
          user={props.user}
        />
        <div className="review_list">
          <p>
            <b>REVIEWS:</b>
          </p>
          {reviews.map((review) => (
            <div key={review.id}>
              <ReviewCard body={review.body} authorId={review.authorId} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default BreweryDetails
