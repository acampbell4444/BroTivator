'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('userAndTeams')

module.exports.associations = (UserAndTeam, {Team, User}) => {
  UserAndTeam.belongsTo(Team)
  UserAndTeam.belongsTo(User)
}
