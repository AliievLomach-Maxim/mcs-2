import { useState } from 'react'

const CreateTodoForm = ({ submit }) => {
	const [title, setTitle] = useState('')

	const resetForm = () => {
		setTitle('')
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		submit(title)
		resetForm()
	}

	const handleChange = ({ target: { value } }) => setTitle(value)

	return (
		<div className='container mb-5'>
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='title' className='form-label'>
						Title
					</label>
					<input
						value={title}
						onChange={handleChange}
						type='text'
						className='form-control'
						id='title'
						name='title'
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

export default CreateTodoForm
