import { getStarships } from "../services/SWAPI"
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query"
import Button from 'react-bootstrap/Button'
import React from 'react'
import TableComponent from "../components/TableComponent"


const StarshipsPage = () => {

	const { data, isError, isLoading } = useQuery(['starships'], getStarships)

	const navigate = useNavigate()

	return (
		<div className="starships-page">
			<h1>Starships Page</h1>

			{isError && <p className="error">Error: Something went wrong</p>}

			{isLoading && <p className="loading">Loading...</p>}

			{data && <TableComponent starshipData={data.results} />}

			<Link
				className='return-btn'
				onClick={(e) => {
					e.preventDefault()
					navigate(`/`)
				}}
				to={`/`}
			>
				<Button variant='light'>Return to the Home Page and Logout</Button>
			</Link>
		</div>
	)
}

export default StarshipsPage
