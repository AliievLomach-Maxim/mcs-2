import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import ProductList from './components/ProductList'
import './style.css'

const App = () => {
	const [isShowModal, setIsShowModal] = useState(false)
	const [values, setValues] = useState([])

	const toggleModal = () => {
		setIsShowModal((prev) => !prev)
	}

	// cdm+cdu without if()
	// useEffect(() => {
	// 	console.log('effect')
	// })
	// console.log('effect')

	// cdm
	// useEffect(() => {
	// 	console.log('effect')
	// }, [])

	// cdm+cdu with if()
	// useEffect(() => {
	// 	console.log('effect')
	// }, [isShowModal])

	// cdu with if()
	// useEffect(() => {
	// 	if (values.length) console.log('effect')
	// }, [values])

	// componentDidMount() {
	// 	console.log('effect')
	// }

	// componentDidUpdate(prevProps, prevState) {
	// 	console.log('effect')
	// }
	// componentDidUpdate(prevProps, prevState) {
	// 	if(isShowModal!==prev)
	// 	console.log('effect')
	// }

	return (
		<>
			<Header openModal={toggleModal} />
			<ProductList />
			{isShowModal && <Modal closeModal={toggleModal}>qwtreuiyquwteqwu</Modal>}
		</>
	)
}

export default App
