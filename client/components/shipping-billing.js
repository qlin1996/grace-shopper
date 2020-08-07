import React, {Component} from 'react'
import {updateUser} from '../store/products'
import {connect} from 'react-redux'

class Shipping extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleSelectSubmit = this.handleSelectSubmit.bind(this)
  }
  handleSelectChange(event) {
    this.setState({value: event.target.value})
    console.log('Your favorite flavor is: ', this.state.value)
  }
  handleSelectSubmit(event) {
    this.props.updateUser(event.target.value, this.state)
  }
  render() {
    return (
      <div>
        <img src="/icon-logo.png" alt="image" className="icon-logo" /> <br />{' '}
        <br />
        <p className="checkout-shipping-header">
          {' '}
          Please Enter Shipping <br /> & Billing Information
        </p>
        <form
          onSubmit={this.handleSubmit}
          name={name}
          className="checkout-forms"
        >
          <div>
            <label htmlFor="firstName">
              <small>First Name</small>
            </label>
            <input name="firstName" type="text" />
          </div>
          <div>
            <label htmlFor="lastName">
              <small>Last Name</small>
            </label>
            <input name="lastName" type="text" />
          </div>
          <br />
          <div>
            <label htmlFor="streetAddress">
              <small>Street</small>
            </label>
            <input name="streetAddress" type="text" />
          </div>
          <div>
            <label htmlFor="city">
              <small>City</small>
            </label>
            <input name="city" type="text" />
          </div>
          <div>
            <label htmlFor="state">
              <small>State </small>
            </label>
            <select id="select-state">
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div>
            <label htmlFor="zipCode">
              <small>Zip Code</small>
            </label>
            <input name="zipCode" type="text" />
          </div>
        </form>
        <form name={name} onClick={this.handleSelectSubmit}>
          <p>Use Shipping info for Billing Info?</p>
          <select
            id="selected"
            onChange={this.handleSelectChange}
            value={this.state.value}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {this.state.value === 'no' ? (
            <div> Add billing info </div>
          ) : (
            <div>
              <button className="review-button" type="submit">
                Review Order
              </button>
            </div>
          )}
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateUser: (id, updateData) => {
      return dispatch(updateUser(id, updateData))
    }
  }
}
export default connect(null, mapDispatchToProps)(Shipping)
