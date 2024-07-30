import './index.css'

const CountriesList = props => {
  const {countryDetails, addVisitedCountry} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisitButton = () => {
    addVisitedCountry(id)
  }
  return (
    <li className="country-list-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="paragraph">Visited</p>
      ) : (
        <button type="button" className="button" onClick={onClickVisitButton}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList
