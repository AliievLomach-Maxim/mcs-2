import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import { Component } from 'react'
import ProductList from './components/ProductList'
import './style.css'

class App extends Component {
	state = { isShowModal: false, counter: 0 }

	toggleModal = () => {
		this.setState((prev) => ({ isShowModal: !prev.isShowModal }))
	}

	render() {
		return (
			<>
				<Header openModal={this.toggleModal} />
				<ProductList />
				{this.state.isShowModal && <Modal closeModal={this.toggleModal}>qwtreuiyquwteqwu</Modal>}
			</>
		)
	}
}

export default App
