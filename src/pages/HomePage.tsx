import React, { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import { useNavigate } from "react-router-dom"

const HomePage = () => {

	const [inputUsername, setInputUsername] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		// navigate(`/starships`)
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
						<Form.Group className="mb-3" controlId="username">
							<Form.Label>Username</Form.Label>
							<Form.Control
								onChange={(e) =>
									setInputUsername(e.target.value)
								}
								placeholder="Enter your username..."
								required
								type="text"
								value={inputUsername}
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
						<div className="d-flex justify-content-between">
							<Button
								variant="success"
								type="submit"
								disabled={!inputUsername || !password}
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
