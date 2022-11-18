const BreweryCard = (props) => {
  return (
    <div className="brewery_card" onClick={() => props.onClick(props.id)}>
      <h3>{props.name}</h3>
      <p>{props.address}</p>

      <div className="beer_list">
        <h4>Beers:</h4>
        {props.beers.map((beer) => (
          <p key={beer}>{beer}</p>
        ))}
      </div>
    </div>
  )
}

export default BreweryCard
