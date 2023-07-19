import Alert from "react-bootstrap/Alert"
import Button from 'react-bootstrap/Button'
import React from 'react'
import TableComponent from "../components/TableComponent"
import { useQuery } from "@tanstack/react-query"
import { getStarships } from "../services/SWAPI"
import { Link, useNavigate } from 'react-router-dom'


const StarshipsPage = () => {

	const { data, isError, isLoading } = useQuery(['starships'], getStarships)

	const navigate = useNavigate()

	return (
		<div className="starships-page">
			<h1>Starships Page</h1>

			{isError && <Alert variant="warning">Error: Something went wrong</Alert>}

			{isLoading && <Alert variant="secondary">Loading...</Alert>}

			{data && <TableComponent starshipData={data.results} />}

			<Link
				className='return-btn'
				onClick={(e) => {
					e.preventDefault();
					navigate(`/`);
				}}
				to={`/`}>
				<Button variant='light'>Return to the Home Page</Button>
			</Link>
		</div>
	)
}

export default StarshipsPage
