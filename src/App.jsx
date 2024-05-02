import { Route, Routes } from 'react-router-dom'

// import ProductPage from './pages/ProductsPage/index'
// import UserPage from './pages/UsersPage/index'
// import MainLayout from './layouts/MainLayout'
// import ProductDetails from './pages/ProductDetails'
import { Suspense, lazy } from 'react'
import TodoPage from './pages/TodoPage'

const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const HomePage = lazy(() => import('./pages/HomePage'))
const ProductPage = lazy(() => import('./pages/ProductsPage'))
const UserPage = lazy(() => import('./pages/UsersPage'))
const MainLayout = lazy(() => import('./layouts/MainLayout'))

const App = () => {
	return (
		<Suspense fallback={<h1>Loading!!!!!!!!!!!!!</h1>}>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path='product' element={<ProductPage />} />
					<Route path='product/:userId' element={<ProductDetails />} />
					<Route path='user' element={<UserPage />} />
					<Route path='todo' element={<TodoPage />} />
				</Route>

				<Route path='/404' element={<div>Error 404</div>} />
			</Routes>
		</Suspense>
	)
}

export default App
