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
	username: string
	password: string
}
