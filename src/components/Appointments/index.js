// Write your code here
import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem/index'

class Appointments extends Component {
  state = {
    titleInput: '',
    dateInput: '',
    appointmentsList: [],
    starred: false,
  }

  onStarred = () => {
    const {starred} = this.state
    this.setState({starred: !starred})
  }

  renderAppointmentsList = () => {
    const {appointmentsList, starred} = this.state
    let list = appointmentsList
    if (starred) {
      list = appointmentsList.filter(eachItem => eachItem.isFav)
    }

    return list.map(eachItem => (
      <AppointmentItem
        key={eachItem.id}
        appointmentDetails={eachItem}
        toggleIsFav={this.toggleIsFav}
      />
    ))
  }

  toggleIsFav = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isFav: !eachItem.isFav}
        }
        return eachItem
      }),
    }))
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const d = dateInput.split('-')
    const date = new Date(d[0], d[1], d[2])
    console.log(typeof dateInput)
    const id = uuidv4()
    console.log(id)
    const newAppointment = {
      id,
      title: titleInput,
      date,
      isFav: false,
    }

    console.log(newAppointment)

    this.setState(prevState => ({
      titleInput: '',
      dateInput: '',
      appointmentsList: [...prevState.appointmentsList, newAppointment],
    }))
  }

  onChangeTitle = event => {
    console.log(event.target.value)
    this.setState({titleInput: event.target.value})
  }

  onChangeDate = event => {
    this.setState({dateInput: event.target.value})
  }

  render() {
    const {starred, titleInput, dateInput} = this.state
    const btn = starred ? 'starred btn' : 'btn'

    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="input-container">
            <div className="inputs">
              <h1 className="main-heading">Add Appointment</h1>
              <form className="input-form" onSubmit={this.onAddAppointment}>
                <label className="label" htmlFor="title">
                  TITLE
                </label>
                <input
                  type="text"
                  className="title-box"
                  placeholder="Title"
                  name="title"
                  value={titleInput}
                  onChange={this.onChangeTitle}
                />
                <label className="label" htmlFor="date">
                  DATE
                </label>
                <input
                  type="date"
                  className="title-box"
                  placeholder="title"
                  value={dateInput}
                  name="date"
                  onChange={this.onChangeDate}
                />

                <button type="button" className="add-btn">
                  Add
                </button>
              </form>
            </div>
            <img
              className="side-img"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>

          <hr className="line" />
          <div className="Appointments-container">
            <div className="headings">
              <h1 className="h2">Appointments</h1>
              <button
                className={`${btn}`}
                type="button"
                onClick={this.onStarred}
              >
                Starred
              </button>
            </div>
            <ul className="appointments">{this.renderAppointmentsList()}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
