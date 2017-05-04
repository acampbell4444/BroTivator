import React from 'react'
import NewTeamModal from '../components/NewTeamModal'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {}

const mapDispatchToProps = (dispatch, ownProps) => {
  const userId = ownProps.params.userId
  return { userId }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTeamModal)
