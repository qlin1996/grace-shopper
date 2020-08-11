import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getUsersInfo} from '../store/users'

export class AllUsers extends React.Component {
  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    return (
      <div>
        {this.props.users.map(user => {
          return (
            <div key={user.id}>
              <Link to={`/users/${user.id}`} key={user.id}>
                <h1>
                  {user.firstName} {user.lastName} {user.email}
                </h1>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => ({
  users: state.users
})

const mapDispatch = dispatch => ({
  getUsers: () => dispatch(getUsersInfo())
})

export default connect(mapState, mapDispatch)(AllUsers)
