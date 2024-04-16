import { useState } from 'react'

const defaultState = {
	title: '',
	description: '',
	price: '',
}

const CreateProductForm = ({ submit }) => {
	const [state, setState] = useState(defaultState)

	const resetForm = () => {
		// this.setState(defaultState)
		setState(defaultState)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		submit(state)
		resetForm()
	}

	// const fn = () => {
	// 	// some code...
	// 	// setState({...state,title:'qwe'})
	// 	setState((prev) => ({ ...prev, title: 'qwe' }))
	// }

	const handleChange = ({ target: { value, name } }) => {
		// this.setState({ [name]: value })
		setState((prev) => ({ ...prev, [name]: value }))
		// setState(({...state, [name]: value }))
		// fn()
	}

	return (
		<div className='container mb-5'>
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='title' className='form-label'>
						Title
					</label>
					<input
						value={state.title}
						onChange={handleChange}
						type='text'
						className='form-control'
						id='title'
						name='title'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='description' className='form-label'>
						Description
					</label>
					<input
						value={state.description}
						onChange={handleChange}
						type='text'
						className='form-control'
						id='description'
						name='description'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='price' className='form-label'>
						Price
					</label>
					<input
						value={state.price}
						onChange={handleChange}
						type='text'
						className='form-control'
						id='price'
						name='price'
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Create
				</button>
				<button type='button' className='btn btn-danger' onClick={resetForm}>
					Clear form
				</button>
			</form>
		</div>
	)
}

export default CreateProductForm
// import { useState } from 'react'

// const defaultState = {
// 	title: '',
// 	description: '',
// 	price: '',
// }

// const CreateProductForm = ({ submit }) => {
// 	const [title, setTitle] = useState('')
// 	const [description, setDescription] = useState('')
// 	const [price, setPrice] = useState('')

// 	const resetForm = () => {
// 		// this.setState(defaultState)
// 		setTitle('')
// 		setDescription('')
// 		setPrice('')
// 	}

// 	const handleSubmit = (e) => {
// 		e.preventDefault()
// 		// const { price, description, title } = this.state
// 		// this.props.submit({ price, description, title })
// 		submit({ price, description, title })
// 		resetForm()
// 	}

// 	const handleChange = ({ target: { value, name } }) => {
// 		// this.setState({ [name]: value })
// 		if (name === 'title') {
// 			setTitle(value)
// 		} else if (name === 'description') {
// 			setDescription(value)
// 		} else if (name === 'price') {
// 			setPrice(value)
// 		}
// 	}

// 	return (
// 		<div className='container mb-5'>
// 			<form onSubmit={handleSubmit}>
// 				<div className='mb-3'>
// 					<label htmlFor='title' className='form-label'>
// 						Title
// 					</label>
// 					<input
// 						value={title}
// 						onChange={handleChange}
// 						type='text'
// 						className='form-control'
// 						id='title'
// 						name='title'
// 					/>
// 				</div>
// 				<div className='mb-3'>
// 					<label htmlFor='description' className='form-label'>
// 						Description
// 					</label>
// 					<input
// 						value={description}
// 						onChange={handleChange}
// 						type='text'
// 						className='form-control'
// 						id='description'
// 						name='description'
// 					/>
// 				</div>
// 				<div className='mb-3'>
// 					<label htmlFor='price' className='form-label'>
// 						Price
// 					</label>
// 					<input
// 						value={price}
// 						onChange={handleChange}
// 						type='text'
// 						className='form-control'
// 						id='price'
// 						name='price'
// 					/>
// 				</div>
// 				<button type='submit' className='btn btn-primary'>
// 					Create
// 				</button>
// 				<button type='button' className='btn btn-danger' onClick={resetForm}>
// 					Clear form
// 				</button>
// 			</form>
// 		</div>
// 	)
// }

// export default CreateProductForm
