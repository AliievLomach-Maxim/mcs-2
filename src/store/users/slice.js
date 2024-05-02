import { createSlice } from '@reduxjs/toolkit'

const initialState = { users: [] }

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		createUsers: (state, { payload }) => {
			state.users = payload
			// return { ...state, users: payload }
		},
		addUsers: (state, { payload }) => {
			state.users.push(payload)
			// return { ...state, users: [...state.users, payload] }
		},
	},
})

export const { createUsers, addUsers } = usersSlice.actions
export const userReducer = usersSlice.reducer
