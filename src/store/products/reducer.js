export const productsReducer = (state = { products: [] }, action) => {
	if (action.type === 'products') return { ...state, products: action.payload }
	else return state
}
