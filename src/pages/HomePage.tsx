import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import React, { useState } from "react"
import { loginUser } from "../services/UserAPI"
import { useNavigate } from "react-router-dom"
import { User } from "../types"

interface IProps {
	loggedIn: () => void
}

const HomePage: React.FC<IProps> = ({ loggedIn }) => {

	const [userEmail, setUserEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState<string | null>(null)
	const navigate = useNavigate()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		const user: User = {
			email: userEmail,
			password: password
		}

		handleLoginUser(user)
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

	return (
		<div>
			<h1>Home Page</h1>
			<Card>
				<Card.Header>Login</Card.Header>
				<Card.Body>
					<Card.Text>
						Enter your username and password
					</Card.Text>
					<Form onSubmit={handleSubmit}>
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
						<div className="d-flex justify-content-between">
							<Button
								variant="success"
								type="submit"
								disabled={!userEmail || !password}
							>
								Login
							</Button>
						</div>
					</Form>
				</Card.Body>
			</Card>
		</div>
	)
}

export default HomePage
