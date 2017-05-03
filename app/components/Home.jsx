import React from 'react'
import {Link} from 'react-router'
import store from '../store'

export default function Home({user}) {
  return (
    <div>
      {
        user&&(<Link to='/myTeam'>My Team</Link>)
      }
    </div>
  )
}
