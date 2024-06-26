import React from 'react'
import { useGlobalContext } from '../../context/GlobalProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Product = ({ product, isShowDetails }) => {
	const { toggleModal } = useGlobalContext()
	const location = useLocation()
	const navigate = useNavigate()
	return (
		<div className='card p-3 mb-2' style={{ width: '300px' }}>
			<h5>{product.title}</h5>
			<p>{product.description}</p>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<button className='btn btn-success' onClick={toggleModal}>
					{product.price} $
				</button>
				{/* {!isShowDetails && (
					<Link to={`${product.id}`} state={location}>
						Details
					</Link>
				)} */}
				{!isShowDetails && (
					<button
						className='btn btn-danger'
						onClick={() => navigate(`${product.id}`, { state: location })}>
						Details
					</button>
				)}
				{/* <button className='btn btn-danger' onClick={() => handleDelete(product.id)}>
						Delete
					</button> */}
			</div>
		</div>
	)
}

export default Product
