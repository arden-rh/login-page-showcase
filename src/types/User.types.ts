export type User = {
	email: string
	password: string
}

export type LoggedInUser = {
	accessToken: string
	user: Omit<User, "password"> & { id: number}
}
