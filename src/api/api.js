import axios from 'axios'

// axios.defaults.baseURL = 'https://dummyjson.com/'
export const instance = axios.create({
	baseURL: 'https://dummyjson.com/',
})
