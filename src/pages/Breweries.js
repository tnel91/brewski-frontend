import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'

import BreweryCard from '../components/BreweryCard'

const Breweries = () => {
  let navigate = useNavigate()
  const [breweries, setBreweries] = useState([])

  const getBreweries = async () => {
    await axios
      .get(`${BASE_URL}/brewery`)
      .then((response) => {
        setBreweries(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const showBreweryDetails = (id) => {
    navigate(`/breweries/${id}`)
  }

  useEffect(() => {
    getBreweries()
  }, [])

  return (
    <div className="breweries">
      <h2>All Breweries</h2>
      <section className="breweryGrid">
        {breweries.map((brewery) => (
          <div key={brewery.id}>
            <BreweryCard
              id={brewery.id}
              name={brewery.name}
              address={brewery.address}
              onClick={showBreweryDetails}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Breweries
