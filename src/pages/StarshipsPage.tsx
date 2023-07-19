import { useQuery } from "@tanstack/react-query"
import { getStarships } from "../services/SWAPI"
import Alert from "react-bootstrap/Alert"
import React from 'react'
import TableComponent from "../components/TableComponent"


const StarshipsPage = () => {

	const { data, isError, isLoading } = useQuery(['starships'], getStarships)

	return (
		<div className="starships-page">
			<h1>Starships Page</h1>

			{isError && <Alert variant="warning">Error: Something went wrong</Alert>}

			{isLoading && <Alert variant="secondary">Loading...</Alert>}

			{data && <TableComponent starshipData={data.results} />}
		</div>
	)
}

export default StarshipsPage
