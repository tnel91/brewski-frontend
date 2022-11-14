import axios from 'axios'
import { useState, useEffect } from 'react'

import BreweryCard from '../components/BreweryCard'

let Base_URL =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001/api'

const Breweries = () => {
  const [breweries, setBreweries] = useState([])

  const getBreweries = async () => {
    await axios
      .get(`${Base_URL}/breweries`)
      .then((response) => {
        setBreweries(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getBreweries()
  }, [])

  return (
    <div className="breweries">
      <h2>Breweries</h2>
      <section className="breweryGrid">
        {breweries.map((brewery) => (
          <div key={brewery.id}>
            <BreweryCard
              id={brewery.id}
              name={brewery.name}
              address={brewery.address}
              beers={brewery.beers}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Breweries
