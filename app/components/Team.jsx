import React, {Component} from 'react'
import {Link} from 'react-router'
import store from '../store'

class Team extends Component {
  render() {
    let { userId } = this.props

    return (
      <div className='jumbotron'>
        <p id='cssTest'>This is your team Page!</p>
        <Link to= {'/user/' + userId + '/team/newTeamModal'}>
          <button type="button" className="btn btn-success btn-lg">
            <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Create a New Team
          </button>
        </Link>
      </div>
    )
  }
}

export default Team
