import { createContext, useState } from 'react'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import ProductList from './components/ProductList'
import './style.css'
import GlobalProvider from './context/GlobalProvider'

const App = () => {
	return (
		<GlobalProvider>
			<Header />
			<ProductList />
			<Modal>qwtreuiyquwteqwu</Modal>
		</GlobalProvider>
	)
}

export default App
