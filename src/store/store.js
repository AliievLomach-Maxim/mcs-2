import { createStore } from 'redux'
import { reducer } from './reducer'

// const reducer = (state, action) => {
// 	if (action.type === 'number') return { ...state, number: action.payload }
// 	// else if (action.type === 'users') return { ...state, users: action.payload }
// 	else if (action.type === 'products') return { ...state, products: action.payload }
// 	else return state
// }

// export const store = createStore(reducer, { number: 10, users: [], products: [] })
export const store = createStore(reducer)
// console.log('store :>> ', store.getState())

// store.dispatch({ type: 'number', payload: 123 })
// store.dispatch({ type: 'users', payload: [123] })
// store.dispatch({ type: 'products', payload: [123] })

// console.log('store :>> ', store.getState())

// const [first, setfirst] = useState(10)
