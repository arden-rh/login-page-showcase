import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table"
import { Starship } from "../types/SWAPI.types"
import React, { useState } from "react"
import Table from 'react-bootstrap/Table'

const columnHelper = createColumnHelper<Starship>()

const columns = [
	columnHelper.accessor("name", {
		header: "Name",
		cell: (info) => info.getValue()
	}),
	columnHelper.accessor("model", {
		header: "Model",
		cell: (info) => info.getValue()
	}),
	columnHelper.accessor("manufacturer", {
		header: "Manufacturer",
		cell: (info) => info.getValue()
	})
]

interface IProps {
	starshipData: Starship[]
}

const TableComponent: React.FC<IProps> = ({ starshipData: data }) => {
	// const [data, setData] = useState<Starship[]>(starshipData)

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel()
	})

	return (
		<Table striped bordered hover responsive size="sm">
			<thead>
				{table.getHeaderGroups().map((headerGroup) => (
					<tr key={headerGroup.id}>
						{headerGroup.headers.map((header) => (
							<th key={header.id} colSpan={header.colSpan}>
								{header.isPlaceholder
									? null
									: flexRender(
										header.column.columnDef.header,
										header.getContext()
									)}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody>
				{table.getRowModel().rows.map((row) => (
					<tr key={row.id}>
						{row.getVisibleCells().map((cell) => (
							<td key={cell.id}>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</Table>
)}

export default TableComponent
