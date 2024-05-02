import { useDispatch, useSelector } from 'react-redux'
import { addUserAction, usersAction } from '../../store/users/actions'
import { addUsers } from '../../store/users/slice'

const HomePage = () => {
	const data = useSelector((state) => state.users)
	const dispatch = useDispatch()

	console.log('data :>> ', data)

	const handleDispatch = () => {
		// dispatch({ type: USERS, payload: [123] })
		// dispatch(usersAction([123]))
		dispatch(addUsers(['qwe']))
	}
	// dispatch({ type: ADD_USER, payload: [321] })
	// dispatch(addUserAction([321]))

	return (
		<div>
			HomePage
			<button onClick={handleDispatch}>Action</button>
		</div>
	)
}

export default HomePage
