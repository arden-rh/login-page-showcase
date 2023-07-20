import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import React, { useEffect, useState } from "react"
import { createUser, loginUser } from "../services/UserAPI"
import { useNavigate } from "react-router-dom"
import { User } from "../types"

interface IProps {
	loggedIn: () => void
}

const HomePage: React.FC<IProps> = ({ loggedIn }) => {

	const [error, setError] = useState<string | null>(null)
	const [newUser, setNewUser] = useState(false)
	const [newUserCreated, setNewUserCreated] = useState(false)
	const [password, setPassword] = useState("")
	const [userEmail, setUserEmail] = useState("")
	const navigate = useNavigate()


	const handleCreate = (e: React.FormEvent) => {
		e.preventDefault()

		const user: User = {
			email: userEmail,
			password: password
		}

		handleCreateUser(user)

	}

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault()

		const user: User = {
			email: userEmail,
			password: password
		}

		handleLoginUser(user)
	}

	const handleCreateUser = async (user: User) => {

		try {
			const createdUser = await createUser(user)

			if (!createdUser.accessToken) {
				throw new Error("Something went wrong")
			}

		} catch (e: any) {
			setError(e.toString())
			return
		}

		setError(null)
		setNewUser(false)
		setNewUserCreated(true)
	}

	const handleLoginUser = async (user: User) => {

		try {
			const loggedInUser = await loginUser(user)

			if (!loggedInUser.accessToken) {
				throw new Error("Something went wrong")
			}

			loggedIn()

		} catch (e: any) {
			setError(e.toString())
			return
		}

		navigate(`/starships`)
	}

	useEffect(() => {

		setNewUserCreated(false)

	}, [])

	return (
		<div>
			<h1>Home Page</h1>
			{!newUser ?
				<Card>
					<Card.Header>Login</Card.Header>
					{newUserCreated && <Alert className="m-4" variant="warning">New user {userEmail} created</Alert>}
					<Card.Body>
						<Card.Text>
							Enter your username and password
						</Card.Text>
						<Form onSubmit={handleLogin}>
							<Form.Group className="mb-3" controlId="email">
								<Form.Label>Email</Form.Label>
								<Form.Control
									onChange={(e) =>
										setUserEmail(e.target.value)
									}
									placeholder="Enter your email..."
									required
									type="email"
									value={userEmail}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="password">
								<Form.Label>Password</Form.Label>
								<Form.Control
									onChange={(e) =>
										setPassword(e.target.value)
									}
									placeholder="Enter your password..."
									required
									type="password"
									value={password}
								/>
							</Form.Group>
							{error && <Card.Text>{error}</Card.Text>}
							<div className="d-flex">
								<Button
									className="me-2"
									disabled={!userEmail || !password}
									type="submit"
									variant="success"
								>
									Login
								</Button>
								<Button
									onClick={() => setNewUser(true)}
									type="button"
									variant="dark"
								>
									New user?
								</Button>
							</div>
						</Form>
					</Card.Body>
				</Card>
				:
				<Card>
					<Card.Header>Register a new user</Card.Header>
					<Card.Body>
						<Card.Text>
							Enter a username and password
						</Card.Text>
						<Form onSubmit={handleCreate}>
							<Form.Group className="mb-3" controlId="email">
								<Form.Label>Email</Form.Label>
								<Form.Control
									onChange={(e) =>
										setUserEmail(e.target.value)
									}
									placeholder="Enter your email..."
									required
									type="email"
									value={userEmail}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="password">
								<Form.Label>Password</Form.Label>
								<Form.Control
									onChange={(e) =>
										setPassword(e.target.value)
									}
									placeholder="Enter your password..."
									required
									type="password"
									value={password}
								/>
							</Form.Group>
							{error && <Card.Text>{error}</Card.Text>}
							<div className="d-flex">
								<Button
									className="me-2"
									disabled={!userEmail || !password}
									type="submit"
									variant="success"
								>
									Create a new user
								</Button>
								<Button
									onClick={() => setNewUser(false)}
									type="button"
									variant="dark"
								>
									Go back
								</Button>
							</div>
						</Form>
					</Card.Body>
				</Card>}
		</div>
	)
}

export default HomePage
