/** User Types */

export type LoggedInUser = {
	accessToken: string
	user: Omit<User, "password"> & { id: number}
}

export type User = {
	email: string
	password: string
}
