// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsFav} = props

  const {id, title, date, isFav} = appointmentDetails
  const toggleFav = () => {
    toggleIsFav(id)
  }
  const fav = isFav
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="appointment-con">
      <div className="top-sec">
        <p className="box-title">{title}</p>
        <button
          type="button"
          className="fav-btn"
          onClick={toggleFav}
          data-testid="star"
        >
          <img className="fav-img" src={fav} alt="star" />
        </button>
      </div>
      <div>
        <p className="date">Date: {date}</p>
      </div>
    </li>
  )
}

export default AppointmentItem
