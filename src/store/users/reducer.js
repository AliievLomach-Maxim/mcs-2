import { ADD_USER, USERS } from './types'

const initialState = { users: [] }

export const userReducer = (state = initialState, { type, payload }) => {
	if (type === USERS) return { ...state, users: payload }
	else if (type === ADD_USER) return { ...state, users: [...state.users, payload] }
	else return state
}
