import Team from '../components/Team'
import { connect } from 'react-redux'
import {whoami} from '../reducers/auth'

const mapStateToProps = (state) => {}

const mapDisptachToProps = (dispatch, ownProps) => {
  const userId = ownProps.params.userId
  return { userId }
}

export default connect(mapStateToProps, mapDisptachToProps)(Team)
