import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {

	const navigate = useNavigate()

	return (
		<>
			<div>
				<h1>Not Found</h1>
			</div>
			<Link
				className='return-btn'
				onClick={(e) => {
					e.preventDefault();
					navigate(`/`);
				}}
				to={`/`}>
				<Button variant='light'>Return to the Home Page</Button>
			</Link>
		</>
	)
}

export default NotFound
