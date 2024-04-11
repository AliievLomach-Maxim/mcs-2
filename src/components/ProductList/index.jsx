import { Component } from 'react'
import Product from '../Product'
import { getProductsApi, getSearchProductsApi } from '../../api/products'
import SearchProductForm from '../Forms/SearchProductForm/index'

class ProductList extends Component {
	state = { products: [], isLoading: false, error: '', searchValue: '' }

	componentDidMount() {
		this.getProducts()
		// getProductsApi().then((data) => console.log('data :>> ', data)).catch
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchValue !== this.state.searchValue)
			this.state.searchValue ? this.getSearchProducts() : this.getProducts()

		// if (prevState.searchValue !== this.state.searchValue && this.state.searchValue)
		// 	this.getSearchProducts()
		// if (prevState.searchValue !== this.state.searchValue && !this.state.searchValue)
		// 	this.getProducts()
	}

	getSearchProducts = async () => {
		try {
			this.setState({ isLoading: true, error: '' })
			const data = await getSearchProductsApi(this.state.searchValue)
			this.setState({ products: data.products, isLoading: false })
		} catch (error) {
			this.setState({ error: error.message, isLoading: false })
		}
	}

	getProducts = async () => {
		try {
			this.setState({ isLoading: true, error: '' })
			const data = await getProductsApi()
			this.setState({ products: data.products, isLoading: false })
		} catch (error) {
			this.setState({ error: error.message, isLoading: false })
		}
	}

	search = (searchValue) => {
		this.setState({ searchValue })
	}

	render() {
		const { isLoading, products, error } = this.state
		return (
			<>
				{isLoading && <h1>Loading...</h1>}
				{error && <h1>{error}</h1>}
				<SearchProductForm search={this.search} />
				<hr />
				{products.map((product) => (
					<Product product={product} key={product.id} />
				))}
			</>
		)
	}
}

export default ProductList
