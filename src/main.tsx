import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 1000 * 60 * 60,
			cacheTime: 1000 * 60 * 60 * 24
		}
	}
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
					<App />
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>,
)

