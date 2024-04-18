import React, { useContext } from 'react'
import { GlobalContext } from '../../App'
import { useGlobalContext } from '../../context/GlobalProvider'

const Product = ({ product }) => {
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
				{/* <button className='btn btn-danger' onClick={() => handleDelete(product.id)}>
						Delete
					</button> */}
			</div>
		</div>
	)
}

export default Product
