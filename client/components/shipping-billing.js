import React, {Component} from 'react'
import {updateUser} from '../store/user'
import {connect} from 'react-redux'

class Shipping extends Component {
  constructor() {
    super()
    this.state = {
      selectValue: '',
      firstName: '',
      lastName: '',
      shippingStreetAddress: '',
      shippingCity: '',
      shippingZipCode: '',
      billingStreetAddress: '',
      billingCity: '',
      billingZipCode: ''
    }
    this.handleBillingChange = this.handleBillingChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleSelectSubmit = this.handleSelectSubmit.bind(this)
  }
  handleBillingChange(event) {
    this.setState({
      selectValue: event.target.value
    })
  }
  handleSelectChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSelectSubmit(event) {
    // this.props.updateUser(event.target.value, this.state)
    console.log(event)
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
            <input
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleSelectChange}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="lastName">
              <small>Last Name</small>
            </label>
            <input
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleSelectChange}
              type="text"
            />
          </div>
          <br />
          <div>
            <label htmlFor="shippingStreetAddress">
              <small>Street</small>
            </label>
            <input
              name="shippingStreetAddress"
              value={this.state.shippingStreetAddress}
              onChange={this.handleSelectChange}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="shippingCity">
              <small>City</small>
            </label>
            <input
              name="shippingCity"
              value={this.state.shippingCity}
              onChange={this.handleSelectChange}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="state">
              <small>State </small>
            </label>
            <select id="select-state">
              <option value="AL" name="shippingState">
                Alabama
              </option>
              <option value="AK" name="shippingState">
                Alaska
              </option>
              <option value="AZ" name="shippingState">
                Arizona
              </option>
              <option value="AR" name="shippingState">
                Arkansas
              </option>
              <option value="CA" name="shippingState">
                California
              </option>
              <option value="CO" name="shippingState">
                Colorado
              </option>
              <option value="CT" name="shippingState">
                Connecticut
              </option>
              <option value="DE" name="shippingState">
                Delaware
              </option>
              <option value="DC" name="shippingState">
                District of Columbia
              </option>
              <option value="FL" name="shippingState">
                Florida
              </option>
              <option value="GA" name="shippingState">
                Georgia
              </option>
              <option value="HI" name="shippingState">
                Hawaii
              </option>
              <option value="ID" name="shippingState">
                Idaho
              </option>
              <option value="IL" name="shippingState">
                Illinois
              </option>
              <option value="IN" name="shippingState">
                Indiana
              </option>
              <option value="IA" name="shippingState">
                Iowa
              </option>
              <option value="KS" name="shippingState">
                Kansas
              </option>
              <option value="KY" name="shippingState">
                Kentucky
              </option>
              <option value="LA" name="shippingState">
                Louisiana
              </option>
              <option value="ME" name="shippingState">
                Maine
              </option>
              <option value="MD" name="shippingState">
                Maryland
              </option>
              <option value="MA" name="shippingState">
                Massachusetts
              </option>
              <option value="MI" name="shippingState">
                Michigan
              </option>
              <option value="MN" name="shippingState">
                Minnesota
              </option>
              <option value="MS" name="shippingState">
                Mississippi
              </option>
              <option value="MO" name="shippingState">
                Missouri
              </option>
              <option value="MT" name="shippingState">
                Montana
              </option>
              <option value="NE" name="shippingState">
                Nebraska
              </option>
              <option value="NV" name="shippingState">
                Nevada
              </option>
              <option value="NH" name="shippingState">
                New Hampshire
              </option>
              <option value="NJ" name="shippingState">
                New Jersey
              </option>
              <option value="NM" name="shippingState">
                New Mexico
              </option>
              <option value="NY" name="shippingState">
                New York
              </option>
              <option value="NC" name="shippingState">
                North Carolina
              </option>
              <option value="ND" name="shippingState">
                North Dakota
              </option>
              <option value="OH" name="shippingState">
                Ohio
              </option>
              <option value="OK" name="shippingState">
                Oklahoma
              </option>
              <option value="OR" name="shippingState">
                Oregon
              </option>
              <option value="PA" name="shippingState">
                Pennsylvania
              </option>
              <option value="RI" name="shippingState">
                Rhode Island
              </option>
              <option value="SC" name="shippingState">
                South Carolina
              </option>
              <option value="SD" name="shippingState">
                South Dakota
              </option>
              <option value="TN" name="shippingState">
                Tennessee
              </option>
              <option value="TX" name="shippingState">
                Texas
              </option>
              <option value="UT" name="shippingState">
                Utah
              </option>
              <option value="VT" name="shippingState">
                Vermont
              </option>
              <option value="VA" name="shippingState">
                Virginia
              </option>
              <option value="WA" name="shippingState">
                Washington
              </option>
              <option value="WV" name="shippingState">
                West Virginia
              </option>
              <option value="WI" name="shippingState">
                Wisconsin
              </option>
              <option value="WY" name="shippingState">
                Wyoming
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="shippingZipCode">
              <small>Zip Code</small>
            </label>
            <input
              name="shippingZipCode"
              value={this.state.shippingZipCode}
              onChange={this.handleSelectChange}
              type="text"
            />
          </div>
        </form>
        <form
          name={name}
          onClick={this.handleSelectSubmit}
          className="yes-no-shipping"
        >
          <p>Use Shipping info for Billing Info?</p>
          <select
            id="selected"
            onChange={this.handleBillingChange}
            value={this.state.value}
          >
            <option value="yes">Yes</option>

            <option value="no">No</option>
          </select>
          {this.state.selectValue === 'no' ? (
            <form className="billing-info-form">
              <p className="checkout-billing-header">
                Please Enter Additional Billing Information
              </p>
              <br />
              <div>
                <label htmlFor="billingStreetAddress">
                  <small>Street</small>
                </label>
                <input
                  name="billingStreetAddress"
                  value={this.state.billingStreetAddress}
                  onChange={this.handleSelectChange}
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="billingCity">
                  <small>City</small>
                </label>
                <input
                  name="billingCity"
                  value={this.state.billingCity}
                  onChange={this.handleSelectChange}
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="billingState">
                  <small>State </small>
                </label>
                <select id="select-state">
                  <option value="AL" name="billingState">
                    Alabama
                  </option>
                  <option value="AK" name="billingState">
                    Alaska
                  </option>
                  <option value="AZ" name="billingState">
                    Arizona
                  </option>
                  <option value="AR" name="billingState">
                    Arkansas
                  </option>
                  <option value="CA" name="billingState">
                    California
                  </option>
                  <option value="CO" name="billingState">
                    Colorado
                  </option>
                  <option value="CT" name="billingState">
                    Connecticut
                  </option>
                  <option value="DE" name="billingState">
                    Delaware
                  </option>
                  <option value="DC" name="billingState">
                    District of Columbia
                  </option>
                  <option value="FL" name="billingState">
                    Florida
                  </option>
                  <option value="GA" name="billingState">
                    Georgia
                  </option>
                  <option value="HI" name="billingState">
                    Hawaii
                  </option>
                  <option value="ID" name="billingState">
                    Idaho
                  </option>
                  <option value="IL" name="billingState">
                    Illinois
                  </option>
                  <option value="IN" name="billingState">
                    Indiana
                  </option>
                  <option value="IA" name="billingState">
                    Iowa
                  </option>
                  <option value="KS" name="billingState">
                    Kansas
                  </option>
                  <option value="KY" name="billingState">
                    Kentucky
                  </option>
                  <option value="LA" name="billingState">
                    Louisiana
                  </option>
                  <option value="ME" name="billingState">
                    Maine
                  </option>
                  <option value="MD" name="billingState">
                    Maryland
                  </option>
                  <option value="MA" name="billingState">
                    Massachusetts
                  </option>
                  <option value="MI" name="billingState">
                    Michigan
                  </option>
                  <option value="MN" name="billingState">
                    Minnesota
                  </option>
                  <option value="MS" name="billingState">
                    Mississippi
                  </option>
                  <option value="MO" name="billingState">
                    Missouri
                  </option>
                  <option value="MT" name="billingState">
                    Montana
                  </option>
                  <option value="NE" name="billingState">
                    Nebraska
                  </option>
                  <option value="NV" name="billingState">
                    Nevada
                  </option>
                  <option value="NH" name="billingState">
                    New Hampshire
                  </option>
                  <option value="NJ" name="billingState">
                    New Jersey
                  </option>
                  <option value="NM" name="billingState">
                    New Mexico
                  </option>
                  <option value="NY" name="billingState">
                    New York
                  </option>
                  <option value="NC" name="billingState">
                    North Carolina
                  </option>
                  <option value="ND" name="billingState">
                    North Dakota
                  </option>
                  <option value="OH" name="billingState">
                    Ohio
                  </option>
                  <option value="OK" name="billingState">
                    Oklahoma
                  </option>
                  <option value="OR" name="billingState">
                    Oregon
                  </option>
                  <option value="PA" name="billingState">
                    Pennsylvania
                  </option>
                  <option value="RI" name="billingState">
                    Rhode Island
                  </option>
                  <option value="SC" name="billingState">
                    South Carolina
                  </option>
                  <option value="SD" name="billingState">
                    South Dakota
                  </option>
                  <option value="TN" name="billingState">
                    Tennessee
                  </option>
                  <option value="TX" name="billingState">
                    Texas
                  </option>
                  <option value="UT" name="billingState">
                    Utah
                  </option>
                  <option value="VT" name="billingState">
                    Vermont
                  </option>
                  <option value="VA" name="billingState">
                    Virginia
                  </option>
                  <option value="WA" name="billingState">
                    Washington
                  </option>
                  <option value="WV" name="billingState">
                    West Virginia
                  </option>
                  <option value="WI" name="billingState">
                    Wisconsin
                  </option>
                  <option value="WY" name="billingState">
                    Wyoming
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="billingZipCode">
                  <small>Zip Code</small>
                </label>
                <input
                  name="billingZipCode"
                  value={this.state.billingZipCode}
                  onChange={this.handleSelectChange}
                  type="text"
                />
              </div>
              <div>
                <button className="review-button-2" type="submit">
                  Review Order
                </button>
              </div>
            </form>
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
