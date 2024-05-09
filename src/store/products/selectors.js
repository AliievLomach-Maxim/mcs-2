import { createSelector } from '@reduxjs/toolkit'

export const selectSearchParams = (state) => state.products.filter

// export const selectProducts = (state) => {
//     const searchParams = selectSearchParams()
// const filteredProducts = state.products.products?.filter((el) => el.name === searchParams)

// 	// const sortedProducts = state.products.products?.toSorted((a, b) => a.price - b.price)
// 	// return sortedProducts
// }
export const selectProducts = (state) => {
	const sortedProducts = state.products.products?.toSorted((a, b) => a.price - b.price)
	return sortedProducts
}

export const selectIsLoading = (state) => state.products.isLoading
export const selectIsError = (state) => state.products.error

const selector = createSelector(selectSearchParams, selectProducts, (searchParams, products) => {
	const filteredProducts = products?.filter((el) => el.name === searchParams)
	return filteredProducts
})
