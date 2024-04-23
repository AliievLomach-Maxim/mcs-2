import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/index'
import ProductPage from './pages/ProductsPage/index'
import UserPage from './pages/UsersPage/index'
import MainLayout from './layouts/MainLayout'
import './style.css'
import ProductDetails from './pages/ProductDetails'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path='product' element={<ProductPage />} />
				<Route path='product/:userId' element={<ProductDetails />} />
				{/* <Route path='product' element={<ProductPage />}>
					<Route path=':id' element={<ProductDetails />} />
				</Route> */}
				<Route path='user' element={<UserPage />} />
			</Route>
			<Route path='/404' element={<div>Error 404</div>} />
		</Routes>
	)
}

export default App
