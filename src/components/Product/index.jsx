import React from 'react'
import { useGlobalContext } from '../../context/GlobalProvider'
import { Link } from 'react-router-dom'

const Product = ({ product, isShowDetails }) => {
	// const { toggleModal } = useContext(GlobalContext)
	const { toggleModal } = useGlobalContext()
	return (
		<div className='card p-3 mb-2' style={{ width: '300px' }}>
			<h5>{product.title}</h5>
			<p>{product.description}</p>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<button className='btn btn-success' onClick={toggleModal}>
					{product.price} $
				</button>
				{!isShowDetails && <Link to={`${product.id}`}>Details</Link>}
				{/* <button className='btn btn-danger' onClick={() => handleDelete(product.id)}>
						Delete
					</button> */}
			</div>
		</div>
	)
}

export default Product
