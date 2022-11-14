const BreweryCard = (props) => {
  return (
    <div className="brewery_card" onClick={() => props.onClick(props.id)}>
      <h3>{props.name}</h3>
      <p>{props.address}</p>
      <p>{props.beers}</p>
    </div>
  )
}

export default BreweryCard
