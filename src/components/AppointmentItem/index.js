// Write your code here
import './index.css'
import {format} from 'date-fns'

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
    <li>
      <div className="appointment-con">
        <div className="top-sec">
          <h1 className="box-title">{title}</h1>
          <button
            type="button"
            className="fav-btn"
            onClick={toggleFav}
            data-testid="star"
          >
            <img className="fav-img" src={fav} alt="favorite" />
          </button>
        </div>
        <div>
          <p className="date">Date: {format(date, 'dd MMMM yyyy, cccc')}</p>
        </div>
      </div>
    </li>
  )
}

export default AppointmentItem
