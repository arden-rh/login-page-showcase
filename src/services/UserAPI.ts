import axios from 'axios'
import { User, loggedInUser } from '../types'

const BASE_URL = "http://localhost:3000"

/**
 * GET users request
 */
export const getUsers = async () => {
	const response = await axios.get(`${BASE_URL}/users`)
	return response.data as User[]
}

/** POST user login request */
export const loginUser = async (data: User) => {
	const response = await axios.post(`${BASE_URL}/login`, data)
	return response.data as loggedInUser
}

/** POST create user request */
export const createUser = async (data: User) => {
	const response = await axios.post(`${BASE_URL}/users`, data)
	return response.data as loggedInUser
}

