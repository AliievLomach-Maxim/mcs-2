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
