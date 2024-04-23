import { Outlet } from 'react-router-dom'
import GlobalProvider from '../../context/GlobalProvider'
import Header from '../../components/Header/Header'
import Modal from '../../components/Modal/Modal'

const MainLayout = () => {
	return (
		<GlobalProvider>
			<Header />
			<Modal>TEST</Modal>
			<Outlet />
		</GlobalProvider>
	)
}

export default MainLayout
// import { Link, NavLink, Outlet } from 'react-router-dom'

// const MainLayout = ({ children }) => {
// 	return (
// 		<>
// 			<nav>
// 				<ul>
// 					<NavLink to='/'>
// 						<li>Home</li>
// 					</NavLink>
// 					<NavLink to='/product'>
// 						<li>Product</li>
// 					</NavLink>
// 					<NavLink to='/user'>
// 						<li>User</li>
// 					</NavLink>
// 				</ul>
// 			</nav>
// 			<Outlet />
// 			{/* {children} */}
// 		</>
// 	)
// }

// export default MainLayout
