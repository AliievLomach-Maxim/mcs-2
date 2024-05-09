import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/GlobalProvider'
import { createPortal } from 'react-dom'

const Modal = ({ children }) => {
	const { isShowModal, toggleModal: closeModal } = useGlobalContext()

	useEffect(() => {
		const handleEsc = ({ code }) => {
			console.log('press esc')
			if (code === 'Escape') closeModal()
		}
		document.addEventListener('keydown', handleEsc)
		return () => document.removeEventListener('keydown', handleEsc)
	}, [closeModal])

	return (
		isShowModal &&
		createPortal(
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
			</div>,
			document.getElementById('modal-root')
		)
	)
}

export default Modal
