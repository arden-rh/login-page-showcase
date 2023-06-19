import { useQuery } from "@tanstack/react-query"
import TableComponent from '../components/TableComponent'
import { getStarships } from "../services/SWAPI"

import Alert from "react-bootstrap/Alert"

const StarshipsPage = () => {

	const { data, isError, status } = useQuery(['starships'], getStarships)

	return (
		<>
			<h1>Starships Page</h1>

			{isError && <Alert variant="warning">Error: Something went wrong</Alert>}

			{data && <TableComponent starshipData={data.results} />}
		</>
	)
}

export default StarshipsPage
