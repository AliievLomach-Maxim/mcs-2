import { Component } from 'react'
import data from '../../data.json'
import Product from '../Product'

class ProductList extends Component {
	state = { products: data }

	handleDelete = (id) => {
		this.setState((prev) => ({
			products: prev.products.filter((el) => el.id !== id),
		}))
	}

	render() {
		return this.state.products.map((product) => (
			<Product product={product} key={product.id} handleDelete={this.handleDelete} />
		))
	}
}

export default ProductList
