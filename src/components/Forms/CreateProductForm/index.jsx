import { Component } from 'react'

const defaultState = {
	title: '',
	description: '',
	price: '',
}

class CreateProductForm extends Component {
	state = {
		...defaultState,
		isHowAlertDiv: true,
	}

	resetForm = () => {
		this.setState(defaultState)
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const { price, description, title } = this.state
		this.props.submit({ price, description, title })
		this.resetForm()
	}

	handleChange = ({ target: { value, name } }) => {
		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className='container mb-5'>
				<form onSubmit={this.handleSubmit}>
					<div className='mb-3'>
						<label htmlFor='title' className='form-label'>
							Title
						</label>
						<input
							value={this.state.title}
							onChange={this.handleChange}
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
							value={this.state.description}
							onChange={this.handleChange}
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
							value={this.state.price}
							onChange={this.handleChange}
							type='text'
							className='form-control'
							id='price'
							name='price'
						/>
					</div>
					<button type='submit' className='btn btn-primary'>
						Create
					</button>
					<button type='button' className='btn btn-danger' onClick={this.resetForm}>
						Clear form
					</button>
				</form>
			</div>
		)
	}
}

export default CreateProductForm
