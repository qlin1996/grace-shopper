import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserInfo, updateUser} from '../store/user'

export class SingleUser extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    const userId = this.props.match.params.id
    this.props.getUser(userId)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUpdate = event => {
    event.preventDefault()
    const email = event.target.email.value
    const firstName = event.target.firstName.value
    const lastName = event.target.lastName.value
    const password = event.target.password.value
    const billingStreetAddress = event.target.billingAddress.value
    const billingCity = event.target.billingCity.value
    const billingState = event.target.billingState.value
    const billingZipCode = event.target.billingZip.value
    const isAdmin = event.target.adminStatus.value
    const isGuest = event.target.guestStatus.value
    const shippingStreetAddress = event.target.shippingAddress.value
    const shippingCity = event.target.shippingCity.value
    const shippingState = event.target.shippingState.value
    const shippingZipCode = event.target.shippingZip.value

    const userId = this.props.match.params.id

    this.props.putUser(userId, {
      email,
      firstName,
      lastName,
      billingStreetAddress,
      billingCity,
      billingState,
      billingZipCode,
      shippingStreetAddress,
      shippingCity,
      shippingState,
      shippingZipCode,
      isAdmin,
      isGuest,
      password
    })
  }

  render() {
    const user = this.props.user || {}
    console.log('user >>> ', user)
    return (
      <div>
        <div>
          <h1 className="text-effects"> First Name: {user.firstName}</h1>
          <h1 className="text-effects"> Last Name: {user.lastName}</h1>
          <h1 className="text-effects"> Email: {user.email}</h1>
          <h1 className="text-effects"> Password: {user.password}</h1>
          <h1 className="text-effects"> Admin Status: {user.isAdmin}</h1>
          <h1 className="text-effects"> Guest Status: {user.isGuest}</h1>
          <h1 className="text-effects">
            Shipping Address: {user.shippingStreetAddress} , {user.shippingCity}{' '}
            , {user.shippingState} , {user.shippingZipCode}{' '}
          </h1>
          <h1 className="text-effects">
            Billing Address {user.billingStreetAddress} , {user.billingCity} ,{' '}
            {user.billingState} , {user.billingZipCode}
          </h1>
        </div>
        <div>
          <h1> Update {user.firstName}'s Information</h1>
          <div>
            {/* <form onSubmit={this.handleUpdate}>
							<label>
								First Name of User
								<input type="text" name="firstName" onChange={this.handleChange} />
							</label>

							<label>
								Last Name of User
								<input type="text" name="lastName" onChange={this.handleChange} />
							</label>

							<label>
								Email of User
								<input type="text" name="email" onChange={this.handleChange} />
							</label>

							<label>
								Password of User
								<input type="text" name="password" onChange={this.handleChange} />
							</label>

							<label>
								Admin Status
								<input type="text" name="adminStatus" onChange={this.handleChange} />
							</label>

							<label>
								Guest Status
								<input type="text" name="guestStatus" onChange={this.handleChange} />
							</label>
							<label>
								Shipping Street Address
								<input type="text" name="shippingAddress" onChange={this.handleChange} />
							</label>
							<label>
								Shipping City
								<input type="text" name="shippingCity" onChange={this.handleChange} />
							</label>
							<label>
								Shipping State
								<input type="text" name="shippingState" onChange={this.handleChange} />
							</label>
							<label>
								Shipping Zip Code
								<input type="text" name="shippingZip" onChange={this.handleChange} />
							</label>
							<label>
								Billing Street Address
								<input type="text" name="billingAddress" onChange={this.handleChange} />
							</label>
							<label>
								Billing City
								<input type="text" name="billingCity" onChange={this.handleChange} />
							</label>
							<label>
								Billing State
								<input type="text" name="billingState" onChange={this.handleChange} />
							</label>
							<label>
								Billing Zip Code
								<input type="text" name="billingZip" onChange={this.handleChange} />
							</label>

							<button type="submit">Submit</button>
						</form> */}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  getUser: userId => dispatch(getUserInfo(userId)),
  putUser: (userId, newInfo) => dispatch(updateUser(userId, newInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser)
