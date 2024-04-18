import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { getProductsApi, getSearchProductsApi } from '../../api/products/index'
import SearchProductForm from '../Forms/SearchProductForm/index'
import Product from '../Product/index'

const ProductList = () => {
	const [counter, setCounter] = useState(0)

	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [searchValue, setSearchValue] = useState('')

	// const result = useCallback(()=>{

	// },[])

	const getSearchProducts = useCallback(async () => {
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
	}, [searchValue])

	useEffect(() => {
		searchValue ? getSearchProducts() : getProducts()
	}, [getSearchProducts, searchValue])

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

	const search = (searchValue) => {
		setSearchValue(searchValue)
	}

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
	const h1ref = useRef(null)
	const counterRef = useRef(0)

	useEffect(() => {
		if (counterRef.current) counterRef.current = 10
	}, [])

	console.log('counterRef.current :>> ', counterRef.current)
	return (
		<>
			<button onClick={() => setCounter((prev) => prev + 1)} style={{ fontSize: '42px' }}>
				{counter}
			</button>
			{isLoading && <h1 ref={h1ref}>Loading...</h1>}
			{error && <h1>{error}</h1>}
			<SearchProductForm search={search} />
			<hr />
			{sortedProducts.map((product) => (
				<Product product={product} key={product.id} />
			))}
		</>
	)
}

export default ProductList
