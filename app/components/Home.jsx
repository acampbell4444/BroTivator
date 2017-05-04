import React from 'react'
import {Link} from 'react-router'

export default function Home({user}) {
  return (
    <div>
      {
        user&&(<Link to={'/user/'+user.id+'/team'}>Team</Link>)
      }
      {
        !user&&(<p>LogIn or SignUp to access your Workout Team</p>)
      }
    </div>
  )
}
