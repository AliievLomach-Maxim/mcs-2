import React, { useEffect } from 'react'

const Modal = ({ closeModal, children }) => {
	const handleEsc = ({ code }) => {
		console.log('press esc')
		if (code === 'Escape') this.props.closeModal()
	}

	useEffect(() => {
		document.addEventListener('keydown', handleEsc)
		return () => document.removeEventListener('keydown', handleEsc)
	}, [])

	// componentDidMount() {
	// }

	// componentWillUnmount() {
	// 	document.removeEventListener('keydown', this.handleEsc)
	// }
	return (
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
					<div className='modal-body'>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
