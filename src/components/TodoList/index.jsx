import { useDispatch, useSelector } from 'react-redux'
import Todo from '../Todo'
import { removeTodoAction, updateTodoAction } from '../../store/todo/slice'

const TodoList = () => {
	const { todo } = useSelector((state) => state.todo)
	const dispatch = useDispatch()
	const removeTodo = (id) => {
		dispatch(removeTodoAction(id))
	}

	const updateStatusTodo = (id) => {
		dispatch(updateTodoAction(id))
	}

	return (
		<ul className='list-group'>
			{todo.map((todoItem) => (
				<Todo
					key={todoItem.id}
					todo={todoItem}
					updateStatusTodo={updateStatusTodo}
					removeTodo={removeTodo}
				/>
			))}
		</ul>
	)
}

export default TodoList
