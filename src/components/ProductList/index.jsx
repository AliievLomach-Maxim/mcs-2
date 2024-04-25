import { useCallback, useEffect, useMemo, useState } from 'react'
import { getProductsApi, getSearchProductsApi } from '../../api/products/index'
import SearchProductForm from '../Forms/SearchProductForm/index'
import Product from '../Product/index'
import { useLocation, useSearchParams } from 'react-router-dom'

const ProductList = () => {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	// const [searchValue, setSearchValue] = useState('')

	const [searchParams] = useSearchParams()

	const getSearchProducts = async (searchValue) => {
		try {
			setIsLoading(true)
			setError('')

			const data = await getSearchProductsApi(searchValue)

			setProducts(data.products)
		} catch (error) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}

	// useEffect(() => {
	// 	searchValue ? getSearchProducts() : getProducts()
	// }, [getSearchProducts, searchValue])

	useEffect(() => {
		const searchValue = searchParams.get('search')
		searchValue ? getSearchProducts(searchValue) : getProducts()
	}, [searchParams])

	// const location = useLocation()
	// console.log('location :>> ', location)

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
	}

	// const search = (searchValue) => {
	// 	setSearchValue(searchValue)
	// }

	const hCLick = () => {
		getSearchProducts()
	}

	// const sortedProducts = products.toSorted((a, b) => {
	// 	console.log('sorting')
	// 	for (let i = 0; i < 1000000; i++) {}
	// 	return a.price - b.price
	// })

	const sortedProducts = useMemo(() => {
		return products.toSorted((a, b) => {
			console.log('sorting')
			for (let i = 0; i < 1000000; i++) {}
			return a.price - b.price
		})
	}, [products])

	return (
		<>
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			<SearchProductForm />
			<hr />
			{sortedProducts.map((product) => (
				<Product product={product} key={product.id} />
			))}
		</>
	)
}

export default ProductList
