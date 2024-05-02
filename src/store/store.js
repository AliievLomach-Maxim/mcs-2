import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'
import { persistStore } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// const persistConfig = {
// 	key: 'todo',
// 	storage,
// 	// whitelist: ['todo'],
// 	// blacklist: [''],
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

// export const store = configureStore({ reducer: persistedReducer })
export const store = configureStore({ reducer })
export const persistor = persistStore(store)
