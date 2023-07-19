import { Navigate } from "react-router-dom"
import React from 'react'

interface IProps {
	children: React.ReactNode
	isLoggedIn: boolean
}

const ProtectedRoute: React.FC<IProps> = ({ children, isLoggedIn }) => {
	if (!isLoggedIn) {
		return <Navigate to="/" replace />
	}

	return children
}

export default ProtectedRoute
