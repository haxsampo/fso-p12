require('dotenv').config()

//const MONGO_URL = process.env.MONGO_URL || undefined
//const REDIS_URL = process.env.REDIS_URL || undefined
const MONGO_URL = process.env.DOCKER_ENV
  ? process.env.DOCKER_MONGO_URL
  : process.env.MONGO_URL
const REDIS_URL = process.env.DOCKER_ENV
  ? process.env.DOCKER_REDIS_URL
  : process.env.REDIS_URL
console.log("config.js mongo url / redis url: ", MONGO_URL, " / ", REDIS_URL)
console.log("we're in docker: ", process.env.DOCKER_ENV)
module.exports = {
  MONGO_URL,//: 'mongodb://the_username:the_password@localhost:3456/the_database',
  REDIS_URL//: '//localhost:6378'
}