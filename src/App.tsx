import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'

/** Pages */
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import StarshipsPage from './pages/StarshipsPage'

import ProtectedRoute  from './components/ProtectedRoute'

import './assets/scss/App.scss'

const App = () => {

	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const setLoggedIn = () => {
		setIsLoggedIn(true)
	}

	return (
		<div id="App">
			<Container className="py-3">
				<Routes>
					<Route path='/' element={<HomePage loggedIn={setLoggedIn}/>} />
					<Route path='/starships' element={
						<ProtectedRoute isLoggedIn={isLoggedIn}>
							<StarshipsPage />
						</ProtectedRoute>} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Container>

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
