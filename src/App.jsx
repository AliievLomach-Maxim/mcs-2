import Header from './components/Header/Header'
// import Counter from './components/Counter/Counter'
import Modal from './components/Modal/Modal'
import { Component } from 'react'
import ProductList from './components/ProductList'

class App extends Component {
	state = { isShowModal: false, counter: 0 }

	// openModal = () => {
	// 	this.setState({ isShowModal: true })
	// }

	// closeModal = () => {
	// 	this.setState({ isShowModal: false })
	// }

	toggleModal = () => {
		this.setState((prev) => ({ isShowModal: !prev.isShowModal }))
	}

	render() {
		return (
			<>
				<Header openModal={this.toggleModal} />
				{/* <Counter /> */}
				<ProductList />
				{this.state.isShowModal && <Modal closeModal={this.toggleModal}>qwtreuiyquwteqwu</Modal>}
			</>
		)
	}
}

export default App

// function name(params) {
// 	this
// }

// name()
