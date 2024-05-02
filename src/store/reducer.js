import { combineReducers } from 'redux'
// import { userReducer } from './users/reducer'
import { productsReducer } from './products/reducer'
import { todoReducer } from './todo/slice'
import { userReducer } from './users/slice'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'todo',
	storage,
	// whitelist: ['todo'],
	// blacklist: [''],
}
const persistedReducer = persistReducer(persistConfig, todoReducer)

export const reducer = {
	users: userReducer,
	products: productsReducer,
	todo: persistedReducer,
}
