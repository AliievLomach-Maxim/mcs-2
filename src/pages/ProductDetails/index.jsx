import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProductApi } from '../../api/products'
import Product from '../../components/Product'

const ProductDetails = () => {
	const { userId } = useParams()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [product, setProduct] = useState(null)

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

	return (
		<div className='container-fluid'>
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			{product && (
				<Product product={product} isShowDetails />
				// <div className='card p-3 mb-2' style={{ width: '300px' }}>
				// 	<h5>{product.title}</h5>
				// 	<p>{product.description}</p>
				// 	<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				// 		<button className='btn btn-success'>{product.price} $</button>
				// 		{/* <button className='btn btn-danger' onClick={() => handleDelete(product.id)}>
				// 		Delete
				// 	</button> */}
				// 	</div>
				// </div>
			)}
		</div>
	)
}

export default ProductDetails
