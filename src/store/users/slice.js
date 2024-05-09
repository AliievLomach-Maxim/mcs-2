import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProductsApi } from '../../api/products'

const initialState = { users: [], isLoading: false, error: '' }

// const handlePending = (state) => {
// 	state.isLoading = true
// 	state.error = ''
// }

// const handleRejected = (state, { error }) => {
// 	state.isLoading = false
// 	state.error = error.message
// }

// const handleFulfilled = (state) => {
// 	state.isLoading = false
// }

const getSome = createAsyncThunk('users/get', () => getProductsApi())

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
	extraReducers: (builder) => {
		builder.addCase(getSome.fulfilled, () => {})
		// .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
		// .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
		// .addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulfilled)
	},
})

export const { createUsers, addUsers } = usersSlice.actions
export const userReducer = usersSlice.reducer
