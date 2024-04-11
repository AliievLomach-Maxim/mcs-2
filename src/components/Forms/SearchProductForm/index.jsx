import { Component } from 'react'

class SearchProductForm extends Component {
	// state = { value: '' }

	handleChange = ({ target: { value } }) => {
		// this.setState({ value })
		this.props.search(value)
	}

	handleSubmit = (e) => {
		e.preventDefault()
	}
	render() {
		return (
			<form className='d-flex' role='search' onSubmit={this.handleSubmit}>
				<input
					className='form-control me-2'
					name='search'
					type='search'
					placeholder='Search'
					aria-label='Search'
					onChange={this.handleChange}
					// value={this.state.value}
				/>
				<button className='btn btn-outline-success' type='submit'>
					Search
				</button>
			</form>
		)
	}
}

export default SearchProductForm
