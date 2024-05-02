import { useDispatch } from 'react-redux'
import CreateTodoForm from '../../components/Forms/CreateTodoForm'
import TodoList from '../../components/TodoList'
import { addTodoAction } from '../../store/todo/slice'

const TodoPage = () => {
	const dispatch = useDispatch()

	const addTodo = (data) => {
		dispatch(addTodoAction(data))
	}
	return (
		<div>
			<CreateTodoForm submit={addTodo} />
			<div className='mb-5'></div>
			<TodoList />
		</div>
	)
}

export default TodoPage
