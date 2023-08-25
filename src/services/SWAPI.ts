import axios from 'axios'
import { ResourceData } from '../types/SWAPI.types'

// Create a new axios instance
const instance = axios.create({
	baseURL: "https://swapi.dev/api",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	}
})

/**
 * Generic GET request
 */
const get = async <T>(endpoint: string) => {
	const response = await instance.get(endpoint)
	return response.data as T
}

export const getStarships = () => {
	return get<ResourceData>(`/starships`)
}
