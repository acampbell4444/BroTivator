import React, {Component} from 'react'

class Team extends Component {
  
  constructor(props) {
    super(props)
    //this.state = {}
  }

  render(){
  const {user} = this.props
  console.log(user)

    return (
      <div className='jumbotron'>
        <p id='cssTest'>This is your team Page!</p>
      </div>
    )
  }
}

export default Team
