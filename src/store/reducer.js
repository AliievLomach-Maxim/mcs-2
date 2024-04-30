import { combineReducers } from 'redux'
import { userReducer } from './users/reducer'
import { productsReducer } from './products/reducer'

export const reducer = combineReducers({
	users: userReducer,
	products: productsReducer,
})
