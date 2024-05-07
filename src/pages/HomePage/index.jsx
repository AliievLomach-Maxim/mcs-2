import { useDispatch, useSelector } from 'react-redux'
import { addUsers } from '../../store/users/slice'

const HomePage = () => {
	const data = useSelector((state) => state.users)
	const dispatch = useDispatch()

	console.log('data :>> ', data)

	const handleDispatch = () => {
		dispatch(addUsers(['qwe']))
	}

	return (
		<div>
			HomePage
			<button onClick={handleDispatch}>Action</button>
		</div>
	)
}

export default HomePage
