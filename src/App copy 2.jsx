import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/index'
import ProductPage from './pages/ProductsPage/index'
import UserPage from './pages/UsersPage/index'
import MainLayout from './layouts/MainLayout'
import './style.css'

const App = () => {
	return (
		<>
			{/* <nav>
				<ul>
					<Link to='/'>
						<li>Home</li>
					</Link>
					<Link to='/product'>
						<li>Product</li>
					</Link>
					<Link to='/user'>
						<li>User</li>
					</Link>
				</ul>
			</nav> */}
			<Routes>
				{/* <Route
					path='/'
					element={
						<MainLayout>
							<HomePage />
							</MainLayout>
						}
					/> */}
				<Route path='/' element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path='product' element={<ProductPage />} />
					<Route path='user' element={<UserPage />} />
				</Route>
				{/* <Route path='/product' element={<ProductPage />} />
				<Route path='/user' element={<UserPage />} /> */}
				<Route path='/404' element={<div>Error 404</div>} />
			</Routes>
			{/* <footer>qwrety</footer> */}
		</>
	)
}

export default App
