import { useEffect, useState } from 'react'
import { getProductsApi, getSearchProductsApi } from '../../api/products/index'
import SearchProductForm from '../Forms/SearchProductForm/index'
import Product from '../Product/index'

const ProductList = () => {
	// state = { products: [], isLoading: false, error: '', searchValue: '' }

	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [searchValue, setSearchValue] = useState('')

	// useEffect(() => {
	// 	console.log('effect')
	// })

	// componentDidMount() {
	// 	this.getProducts()
	// }

	// useEffect(() => {
	// 	getProducts()
	// }, [])

	useEffect(() => {
		const getSearchProducts = async () => {
			try {
				// this.setState({ isLoading: true, error: '' })
				setIsLoading(true)
				setError('')

				const data = await getSearchProductsApi(searchValue)
				// this.setState({ products: data.products, isLoading: false })
				setProducts(data.products)
			} catch (error) {
				setError(error.message)
				// this.setState({ error: error.message, isLoading: false })
			} finally {
				setIsLoading(false)
			}
		}
		searchValue ? getSearchProducts() : getProducts()
	}, [searchValue])

	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevState.searchValue !== this.state.searchValue)
	// 		this.state.searchValue ? this.getSearchProducts() : this.getProducts()
	// }

	const getProducts = async () => {
		try {
			setIsLoading(true)
			setError('')
			const data = await getProductsApi()
			setProducts(data.products)
		} catch (error) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
		// 	this.setState({ products: data.products, isLoading: false })
		// } catch (error) {
		// 	this.setState({ error: error.message, isLoading: false })
		// }
	}

	const search = (searchValue) => {
		// this.setState({ searchValue })
		setSearchValue(searchValue)
	}
	return (
		<>
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			<SearchProductForm search={search} />
			<hr />
			{products.map((product) => (
				<Product product={product} key={product.id} />
			))}
		</>
	)
}

export default ProductList
