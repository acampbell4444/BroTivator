'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('teams', {
  name: STRING,
})

module.exports.associations = (Team, {User, UserAndTeam}) => {
  Team.belongsToMany(User, {as: 'userTeam', through: UserAndTeam})
}