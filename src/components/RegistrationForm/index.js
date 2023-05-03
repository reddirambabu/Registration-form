// Write your JS code here
import {Component} from 'react'

import './index.css'

const initialState = {
  firstName: '',
  lastName: '',
  firstNameErrorMsg: false,
  lastNameErrorMsg: false,
  submitStatus: false,
}

class RegistrationForm extends Component {
  state = initialState

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state

    if (firstName === '') {
      this.setState({firstNameErrorMsg: true})
    } else {
      this.setState({firstNameErrorMsg: false})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state

    if (lastName === '') {
      this.setState({lastNameErrorMsg: true})
    } else {
      this.setState({lastNameErrorMsg: false})
    }
  }

  firstNameField = () => {
    const {firstNameErrorMsg, firstName} = this.state

    return (
      <div className="input-container">
        <label className="label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          placeholder="First name"
          id="firstName"
          className="input-field"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          value={firstName}
        />
        {firstNameErrorMsg && <p className="error">Required</p>}
      </div>
    )
  }

  LastNameField = () => {
    const {lastNameErrorMsg, lastName} = this.state

    return (
      <div className="input-container">
        <label className="label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          placeholder="Last name"
          id="lastName"
          className="input-field"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          value={lastName}
        />
        {lastNameErrorMsg && <p className="error">Required</p>}
      </div>
    )
  }

  onSubmitForm = event => {
    const {firstName, lastName} = this.state
    event.preventDefault()

    if (firstName !== '' && lastName !== '') {
      this.setState({submitStatus: true})
    } else {
      if (firstName === '') {
        this.setState({firstNameErrorMsg: true})
      }
      if (lastName === '') {
        this.setState({lastNameErrorMsg: true})
      }
    }
  }

  renderRegistrationFom = () => (
    <form className="form-container" onSubmit={this.onSubmitForm}>
      {this.firstNameField()}
      {this.LastNameField()}
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  )

  anotherRegistration = () => {
    this.setState(initialState)
  }

  renderSubmitForm = () => (
    <div className="success-submit-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="submit-result">Submitted Successfully</p>
      <button
        type="button"
        className="button"
        onClick={this.anotherRegistration}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {submitStatus} = this.state

    return (
      <div className="registration-container">
        <h1 className="heading">Registration</h1>
        {submitStatus ? this.renderSubmitForm() : this.renderRegistrationFom()}
      </div>
    )
  }
}

export default RegistrationForm
