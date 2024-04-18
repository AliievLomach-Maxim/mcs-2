import { useContext } from 'react'
import { GlobalContext } from '../../App'
import { useGlobalContext } from '../../context/GlobalProvider'

const Header = () => {
	// const { toggleModal: openModal } = useContext(GlobalContext)
	const { toggleModal: openModal } = useGlobalContext()

	return (
		<nav className='navbar bg-dark mb-3'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1 text-success'>Navbar</span>
				<button className='btn btn-outline-success' onClick={openModal}>
					Open Modal
				</button>
			</div>
		</nav>
	)
}

export default Header
