import { Component, PureComponent } from 'react'

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

	// shouldComponentUpdate(nextProps, nextState) {
	// 	if (nextProps.submit !== this.props.submit) return true
	// 	return false
	// }

	// componentDidMount() {
	// 	this.setState
	// }

	componentDidUpdate(prevProps, prevState) {
		console.log('update')
	}

	resetForm = () => {
		this.setState(defaultState)
	}

	handleSubmit = (e) => {
		e.preventDefault()
		// this.props.submit({
		//     ...this.state
		// })
		const { price, description, title } = this.state
		this.props.submit({ price, description, title })
		this.resetForm()
	}

	handleChange = ({ target: { value, name } }) => {
		// if (value.includes('@')) return
		// if (name === 'title') this.setState({ [name]: value })
		// if (name === 'description') this.setState({ dscription: value })
		this.setState({ [name]: value })
	}

	render() {
		// console.log('this.state :>> ', this.state)
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
