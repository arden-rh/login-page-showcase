import { ResourceData } from '../types/SWAPI.types'
import axios from 'axios'

/** New axios instance */
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

/**
 * GET Starships
 */
export const getStarships = () => {
	return get<ResourceData>(`/starships`)
}
