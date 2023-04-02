import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReviewForm from '../components/ReviewForm'
import ReviewCard from '../components/ReviewCard'
import AuthError from '../components/AuthError'
import { BASE_URL } from '../globals'

const BreweryDetails = (props) => {
  const [brewery, setBrewery] = useState({
    name: '',
    address: '',
    beers: ['']
  })

  const [reviews, setReviews] = useState([])

  const [editCounter, setEditCounter] = useState(0)

  let { breweryId } = useParams()

  useEffect(() => {
    console.log('useEffect getReviews')
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
    getReviews()
  }, [editCounter, breweryId])

  useEffect(() => {
    console.log('useEffect getBrewery')
    const getBrewery = async () => {
      await axios
        .get(`${BASE_URL}/brewery/${breweryId}`)
        .then((response) => {
          setBrewery(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getBrewery()
  }, [breweryId])

  return (
    <div>
      {props.authenticated ? (
        <div className="details">
          <h1>{brewery.name}</h1>
          <h2>{brewery.address}</h2>
          <div className="beer_list">
            <h3>Beers:</h3>
            {brewery.beers.map((beer, i) => (
              <p key={i}>{beer}</p>
            ))}
          </div>
          <section className="review_section">
            <ReviewForm
              reviews={reviews}
              breweryId={breweryId}
              editCounter={editCounter}
              setEditCounter={setEditCounter}
              user={props.user}
            />
            <div className="review_list">
              <h3>Reviews</h3>
              {reviews.map((review) => (
                <div key={review.id}>
                  <ReviewCard body={review.body} authorId={review.authorId} />
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <AuthError />
      )}
    </div>
  )
}

export default BreweryDetails
