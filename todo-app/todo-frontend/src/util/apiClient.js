import axios from 'axios'

//console.log("apiClient.js REACT_APP_BACKEND_URL:", process.env.REACT_APP_BACKEND_URL, " process.env.DOCKER_ENV:", process.env.DOCKER_ENV)
//console.log("WATCHPACK_POLLING:", process.env.WATCHPACK_POLLING)
//var BACKEND_URL = process.env.DOCKER_ENV
//? process.env.DOCKER_REACT_APP_BACKEND_URL
//: process.env.REACT_APP_BACKEND_URL
var BACKEND_URL ="http://localhost:8080/api/" //process.env.DOCKER_REACT_APP_BACKEND_URL
console.log("BACKEND URL: ", BACKEND_URL)
const apiClient = axios.create({
	baseURL: BACKEND_URL //process.env.REACT_APP_BACKEND_URL,
})

export default apiClient