import './index.css'

const VisitedCountryList = props => {
  const {visitedCountryList, removeVisitedCountry} = props
  const {id, name, imageUrl} = visitedCountryList

  const onClickRemoveCountry = () => {
    removeVisitedCountry(id)
  }

  return (
    <li className="visitedCountry-list">
      <img src={imageUrl} alt="thumbnail." className="country-image" />
      <div className="visitedCountry-info-container">
        <p className="visitedCountryName">{name}</p>
        <button
          type="button"
          className="remove-button"
          onClick={onClickRemoveCountry}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryList
