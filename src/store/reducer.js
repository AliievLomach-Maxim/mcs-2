// import { userReducer } from './users/reducer'
import { todoReducer } from './todo/slice'
import { userReducer } from './users/slice'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import { productsReducer } from './products/slice'
import { rootReducer } from './root/slice'

const persistConfig = {
	key: 'todo',
	storage,
}
const persistedReducer = persistReducer(persistConfig, todoReducer)

export const reducer = {
	users: userReducer,
	products: productsReducer,
	todo: persistedReducer,
	root: rootReducer,
}
