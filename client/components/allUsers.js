import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getUsersInfo} from '../store/users'

export class AllUsers extends React.Component {
  async componentDidMount() {
    try {
      await this.props.getUsers()
    } catch (error) {
      console.log(error)
    }
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
