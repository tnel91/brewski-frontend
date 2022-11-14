const BreweryCard = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.address}</p>
      <p>{props.beers}</p>
    </div>
  )
}

export default BreweryCard
