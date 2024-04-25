import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchProductForm = () => {
	const [value, setValue] = useState('')
	const [searchParams, setSearchParams] = useSearchParams()

	const handleChange = ({ target: { value } }) => {
		setValue(value)
	}

	useEffect(() => {
		const value = searchParams.get('search')
		value && setValue(value)
	}, [searchParams])

	const handleSubmit = (e) => {
		e.preventDefault()
		setSearchParams({ search: value })
	}
	return (
		<form className='d-flex' role='search' onSubmit={handleSubmit}>
			<input
				className='form-control me-2'
				name='search'
				type='search'
				placeholder='Search'
				aria-label='Search'
				onChange={handleChange}
				value={value}
			/>
			<button className='btn btn-outline-success' type='submit'>
				Search
			</button>
		</form>
	)
}

export default SearchProductForm
