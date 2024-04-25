import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getSingleProductApi } from '../../api/products'
import Product from '../../components/Product'

const ProductDetails = () => {
	const { userId } = useParams()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [product, setProduct] = useState(null)

	const navigate = useNavigate()

	const location = useLocation()

	useEffect(() => {
		const getSingleProduct = async () => {
			try {
				setIsLoading(true)
				const data = await getSingleProductApi(userId)
				setProduct(data)
				setIsLoading(false)
			} catch (error) {
				setError(error.message)
				setIsLoading(false)
			}
		}
		userId && getSingleProduct()
	}, [userId])

	const handleClick = () => {
		const res = window.confirm('are')
		res && navigate(location.state ?? '/product')
	}

	return (
		<div className='container-fluid'>
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			<Link to={location.state ?? '/product'}>Go back</Link>
			<button onClick={handleClick}>GoBack</button>
			{product && <Product product={product} isShowDetails />}
		</div>
	)
}

export default ProductDetails
