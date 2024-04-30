import { ADD_USER, USERS } from './types'

export const usersAction = (value) => {
	return { type: USERS, payload: value }
}

export const addUserAction = (value) => {
	return { type: ADD_USER, payload: value }
}
