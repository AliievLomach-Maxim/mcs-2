import { Component } from 'react'
import data from '../../data.json'
import Product from '../Product'
import CreateProductForm from '../Forms/CreateProductForm'
// import CreateProductFormFormik from '../Forms/CreateProductFormFormik'

class ProductList extends Component {
	state = { products: data, counter: { asd: '' } }

	handleDelete = (id) => {
		this.setState((prev) => ({
			products: prev.products.filter((el) => el.id !== id),
		}))
	}

	createNewProduct = (newProdObj) => {
		this.setState((prev) => ({
			products: [{ ...newProdObj, id: Date.now() }, ...prev.products],
		}))
	}

	componentDidMount() {
		const localData = localStorage.getItem('products')
		if (localData && JSON.parse(localData).length > 0) {
			this.setState({ products: JSON.parse(localData) })
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.products.length !== this.state.products.length) {
			localStorage.setItem('products', JSON.stringify(this.state.products))
		}
		if (prevState.products.length > this.state.products.length) {
			console.log('deleted successfully')
		} else if (prevState.products.length < this.state.products.length) {
			console.log('created successfully')
		}
	}

	render() {
		return (
			<>
				<button onClick={() => this.setState((prev) => ({ counter: { asd: '' } }))}>0</button>
				<CreateProductForm submit={this.createNewProduct} counter={this.state.counter} />
				{/* <hr />
				<hr />
				<CreateProductFormFormik submit={this.createNewProduct} /> */}
				<hr />
				{this.state.products.map((product) => (
					<Product product={product} key={product.id} handleDelete={this.handleDelete} />
				))}
			</>
		)
	}
}

export default ProductList
