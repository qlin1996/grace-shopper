import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      {displayName === 'Sign Up' ? (
        <div>
          <img src="/icon-logo.png" alt="image" className="icon-logo" /> <br />{' '}
          <br />
          <p className="welcome-header"> Join Us Here!</p>
          <form onSubmit={handleSubmit} name={name} className="auth-forms">
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
            <br />
            <div>
              <label htmlFor="email">
                <small>Email</small>
              </label>
              <input name="email" type="text" />
            </div>
            <br />
            <div>
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input name="password" type="password" />
            </div>
            <br />
            <div>
              <button type="submit" className="auth-button1">
                {displayName}
              </button>
            </div>
            <br />
            {error &&
              error.response && (
                <div className="error-message"> {error.response.data} </div>
              )}
            <button type="button" className="auth-google-button1">
              <a href="/auth/google">{displayName} with Google</a>
            </button>
            <img src="/google.png" alt="image" className="google-logo1" />
          </form>
        </div>
      ) : (
        <div>
          <img src="/icon-logo.png" alt="image" className="icon-logo" />
          <br /> <br />
          <p className="welcome-header">Welcome Back!</p>
          <form onSubmit={handleSubmit} name={name} className="auth-forms">
            <div>
              <label htmlFor="email">
                <small>Email</small>
              </label>
              <input name="email" type="text" />
            </div>
            <br />
            <div>
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input name="password" type="password" />
            </div>
            <br />
            <div>
              <button type="submit" className="auth-button2">
                {displayName}
              </button>
              <br />
              <br />
              <p className="option-or">⇜ or ⇝</p>
              <Link to="/signup" id="sign-up">
                SIGN UP
              </Link>
            </div>
            <br />
            {error &&
              error.response && (
                <div className="error-message"> {error.response.data} </div>
              )}
            <button type="button" className="auth-google-button2">
              <a href="/auth/google">{displayName} with Google</a>
            </button>
            <img src="/google.png" alt="image" className="google-logo2" />
          </form>
        </div>
      )}
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
