import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'
import { persistStore } from 'redux-persist'

// const customMiddleware = (store) => {
// 	return (next) => {
// 		return (action) => {
// 			if (typeof action === 'object') {
// 				return next(action)
// 			} else {
// 				return action(store.dispatch)
// 			}
// 		}
// 	}
// }

export const store = configureStore({ reducer })
export const persistor = persistStore(store)
