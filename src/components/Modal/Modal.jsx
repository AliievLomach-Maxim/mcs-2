import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/GlobalProvider'

const Modal = ({ children }) => {
	const { isShowModal, toggleModal: closeModal } = useGlobalContext()

	const handleEsc = ({ code }) => {
		console.log('press esc')
		if (code === 'Escape') this.props.closeModal()
	}

	useEffect(() => {
		document.addEventListener('keydown', handleEsc)
		return () => document.removeEventListener('keydown', handleEsc)
	}, [])

	return (
		isShowModal && (
			<div className='modal fade show' style={{ display: 'block', backdropFilter: 'blur(5px)' }}>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'> Modal</h5>
							<button
								type='button'
								className='btn-close'
								aria-label='Close'
								onClick={closeModal}></button>
						</div>
						<div className='modal-body'>
							{children}
							{isShowModal && 'isShowModal'}
						</div>
					</div>
				</div>
			</div>
		)
	)
}

export default Modal
