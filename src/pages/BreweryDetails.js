import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReviewForm from '../components/ReviewForm'

let Base_URL =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001/api'

const BreweryDetails = () => {
  const navigate = useNavigate()
  const [brewery, setBrewery] = useState({
    name: '',
    address: '',
    beers: ['']
  })

  let { breweryId } = useParams()

  const getBrewery = async () => {
    await axios
      .get(`${Base_URL}/breweries/${breweryId}`)
      .then((response) => {
        setBrewery(response.data)
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
      <ReviewForm breweryId={breweryId} />
    </div>
  )
}

export default BreweryDetails
