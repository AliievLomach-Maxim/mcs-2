import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProductsApi } from '../../api/products'

const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

const handleRejected = (state, { error }) => {
	state.isLoading = false
	state.error = error.message
}

const handleFulfilled = (state) => {
	state.isLoading = false
}

export const productsAction = createAsyncThunk('getProducts', () => getProductsApi())
export const createProductAction = createAsyncThunk('createProducts', () => getProductsApi())

const productsSlice = createSlice({
	name: 'products',
	initialState: { products: null, product: null, isLoading: false, error: '' },

	extraReducers: (builder) => {
		builder
			.addCase(productsAction.fulfilled, (state, { payload }) => {
				state.products = payload.products
			})
			.addCase(createProductAction.fulfilled, (state, { payload }) => {
				state.product = payload.product
			})
			.addMatcher((action) => action.type.endsWith('/pending'), handlePending)
			.addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
			.addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulfilled)
	},
	// extraReducers: (builder) => {
	// 	builder
	// 		// .addCase(productsAction.pending, handlePending)
	// 		.addCase(productsAction.fulfilled, (state, { payload }) => {
	// 			state.isLoading = false
	// 			state.products = payload.products
	// 		})
	// 		// .addCase(productsAction.rejected, handleRejected)
	// 		// .addCase(createProductAction.pending, handlePending)
	// 		.addCase(createProductAction.fulfilled, (state, { payload }) => {
	// 			state.isLoading = false
	// 			state.product = payload.product
	// 		})
	// 		// .addCase(createProductAction.rejected, handleRejected)
	// 		.addMatcher((action) => action.type.endsWith('/pending'), handlePending)
	// 		.addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
	// },
})

// -----------
// export const productsAction = createAsyncThunk('products', async (data, thunkAPI) => {
// 	try {
// 		return await getProductsApi()
// 	} catch (error) {
// 		return thunkAPI.rejectWithValue(error)
// 	}
// })

// const productsSlice = createSlice({
// 	name: 'products',
// 	initialState: { products: null, isLoading: false, error: '' },

// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(productsAction.pending, (state) => {
// 				state.isLoading = true
// 				state.error = ''
// 			})
// 			.addCase(productsAction.fulfilled, (state, { payload }) => {
// 				state.isLoading = false
// 				state.products = payload.products
// 			})
// 			.addCase(productsAction.rejected, (state, { payload }) => {
// 				state.isLoading = false
// 				state.error = payload.message
// 			})
// 		// .addCase(productsAction.rejected, (state, { error }) => {
// 		// 	state.isLoading = false
// 		// 	state.error = error.message
// 		// })
// 	},
// })

// // export const productsAction = () => {
// //     return async (dispatch) => {
// //         try {
// // 			dispatch(productsSlice.actions.fetching())
// // 			const data = await getProductsApi()
// // 			dispatch(productsSlice.actions.success(data.products))
// // 		} catch (error) {
// //             dispatch(productsSlice.actions.error(error))
// // 		}
// // 	}
// // }

// // export const productsAction = createAsyncThunk('products', () => getProductsApi())
// export const productsAction = createAsyncThunk('products', () => getProductsApi())

// const productsSlice = createSlice({
// 	name: 'products',
// 	initialState: { products: null, isLoading: false, error: '' },
// 	// reducers: {
// 	// 	// fetching: (state) => {
// 	// 	// 	state.isLoading = true
// 	// 	// 	state.error = ''
// 	// 	// },
// 	// 	// success: (state, { payload }) => {
// 	// 	// 	state.isLoading = false
// 	// 	// 	state.products = payload
// 	// 	// },
// 	// 	// error: (state, { payload }) => {
// 	// 	// 	state.isLoading = false
// 	// 	// 	state.error = payload.message
// 	// 	// },
// 	// },
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(productsAction.pending, (state) => {
// 				state.isLoading = true
// 				state.error = ''
// 			})
// 			.addCase(productsAction.fulfilled, (state, { payload }) => {
// 				state.isLoading = false
// 				state.products = payload.products
// 			})
// 			.addCase(productsAction.rejected, (state, { payload }) => {
// 				state.isLoading = false
// 				state.error = payload.message
// 			})
// 	},
// })

export const productsReducer = productsSlice.reducer
// export const {} = productsSlice.actions
