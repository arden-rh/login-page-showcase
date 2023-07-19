export type ResourceData = {
	count: number
	results: Starship[]
}

export type Starship = {
	name: string
	model: string
	manufacturer: string
}

export type User = {
	email: string
	password: string
}

export type loggedInUser = {
	accessToken: string
	user: Omit<User, "password"> & { id: number}
}
