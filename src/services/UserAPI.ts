const BASE_URL = "http://localhost:3001"
import { User, LoggedInUser } from '../types/User.types'
import axios from 'axios'

/**
 * GET users request
 */
export const getUsers = async () => {
	const response = await axios.get(`${BASE_URL}/users`)
	return response.data as User[]
}

/**
 * POST create user request
 */
export const createUser = async (data: User) => {
	const response = await axios.post(`${BASE_URL}/users`, data)
	return response.data as LoggedInUser
}

/**
 * POST user login request
 */
export const loginUser = async (data: User) => {
	const response = await axios.post(`${BASE_URL}/login`, data)
	return response.data as LoggedInUser
}

