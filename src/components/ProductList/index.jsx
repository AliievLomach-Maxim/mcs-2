import { Component } from 'react'
import data from '../../data.json'
import Product from '../Product'
import CreateProductForm from '../Forms/CreateProductForm'
import CreateProductFormFormik from '../Forms/CreateProductFormFormik'

class ProductList extends Component {
	state = { products: data }

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

	render() {
		return (
			<>
				<CreateProductForm submit={this.createNewProduct} />
				<hr />
				<hr />
				<hr />
				<CreateProductFormFormik submit={this.createNewProduct} />
				{this.state.products.map((product) => (
					<Product product={product} key={product.id} handleDelete={this.handleDelete} />
				))}
			</>
		)
	}
}

export default ProductList
