import { instance } from '../api'

export const getProductsApi = async () => {
	const { data } = await instance('products')
	return data
}

export const getSearchProductsApi = async (query) => {
	const { data } = await instance(`products/search?q=${query}`)
	return data
}

export const getSingleProductApi = async (id) => {
	const { data } = await instance(`products/${id}`)
	return data
}
