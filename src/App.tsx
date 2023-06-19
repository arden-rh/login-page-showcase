import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'
import StarshipsPage from './pages/StarshipsPage'
import './assets/scss/App.scss'

const App = () => {

	return (
		<div id="App">
			<Container className="py-3">
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/starships' element={<StarshipsPage />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Container>

			<ReactQueryDevtools position='bottom-right'/>
		</div>
	)
}

export default App
