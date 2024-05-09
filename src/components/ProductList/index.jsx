import { useEffect, useState } from 'react'
import SearchProductForm from '../Forms/SearchProductForm/index'
import Product from '../Product/index'
import { useDispatch, useSelector } from 'react-redux'
import { productsAction } from '../../store/products/slice'
import { selectIsError, selectIsLoading, selectProducts } from '../../store/products/selectors'

const ProductList = () => {
	const [counter, setCounter] = useState(0)
	const products = useSelector(selectProducts)
	const isLoading = useSelector(selectIsLoading)
	const error = useSelector(selectIsError)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(productsAction())
	}, [dispatch])

	return (
		<>
			<button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			<SearchProductForm />
			<hr />
			{products && products.map((product) => <Product product={product} key={product.id} />)}
		</>
	)
}

export default ProductList
