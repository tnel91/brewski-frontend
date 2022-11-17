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
      {brewery.beers.map((beer, i) => (
        <p key={i}>{beer}</p>
      ))}
      <ReviewForm
        breweryId={breweryId}
        getReviews={getReviews}
        user={props.user}
      />
      <section>
        {reviews.map((review) => (
          <div key={review.id}>
            <ReviewCard body={review.body} authorId={review.authorId} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default BreweryDetails
