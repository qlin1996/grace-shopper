import React, {Component} from 'react'
import {connect} from 'react-redux'
class home extends Component {
  render() {
    return (
      <div>
        <img src="https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      </div>
    )
  }
}

export default connect(null)(home)
