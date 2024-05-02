import { useGlobalContext } from '../../context/GlobalProvider'
import { NavLink } from 'react-router-dom'

const Header = () => {
	const { toggleModal: openModal } = useGlobalContext()

	return (
		<nav className='navbar bg-dark mb-3'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1 text-success'>Navbar</span>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>

					<li>
						<NavLink to='/product'>Product</NavLink>
					</li>

					<li>
						<NavLink to='/user'>User</NavLink>
					</li>

					<li>
						<NavLink to='/todo'>Todo</NavLink>
					</li>
				</ul>
				<button className='btn btn-outline-success' onClick={openModal}>
					Open Modal
				</button>
			</div>
		</nav>
	)
}

export default Header
