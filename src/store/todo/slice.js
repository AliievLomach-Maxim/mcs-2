import { createSlice, nanoid } from '@reduxjs/toolkit'
import todo from '../../todo.json'

const todoSlice = createSlice({
	name: 'todo',
	initialState: { todo },
	reducers: {
		addTodoAction: {
			prepare: (title) => {
				const todo = {
					title,
					isCompleted: false,
					id: nanoid(),
				}
				return { payload: todo }
			},
			reducer: (state, { payload }) => {
				state.todo.push(payload)
			},
		},
		// addTodoAction: (state, { payload }) => {
		// 	state.todo.push(payload)
		// },
		removeTodoAction: (state, { payload }) => {
			state.todo = state.todo.filter((el) => el.id !== payload)
		},
		updateTodoAction: (state, { payload }) => {
			state.todo = state.todo.map((el) => {
				if (el.id === payload) {
					return { ...el, isCompleted: !el.isCompleted }
				}
				return el
			})
		},
	},
})

export const { addTodoAction, removeTodoAction, updateTodoAction } = todoSlice.actions
export const todoReducer = todoSlice.reducer
