import { Form, Formik, Field } from 'formik'

const CreateProductFormFormik = ({ submit }) => {
	return (
		<Formik
			initialValues={{
				title: '',
				description: '',
				price: '',
			}}
			onSubmit={(values, data) => {
				submit(values)
				data.resetForm()
			}}>
			{({ resetForm }) => (
				<div className='container mb-5'>
					<Form>
						<div className='mb-3'>
							<label htmlFor='title' className='form-label'>
								Title
							</label>
							<Field name='title' id='title' className='form-control' />
						</div>
						<div className='mb-3'>
							<label htmlFor='description' className='form-label'>
								Description
							</label>
							<Field name='description' id='description' className='form-control' />
						</div>
						<div className='mb-3'>
							<label htmlFor='price' className='form-label'>
								Price
							</label>
							<Field name='price' id='price' className='form-control' />
						</div>
						<button type='submit' className='btn btn-primary'>
							Create
						</button>
						<button type='button' className='btn btn-danger' onClick={resetForm}>
							Clear Form
						</button>
					</Form>
				</div>
			)}
		</Formik>
		// <Formik
		// 	initialValues={{
		// 		title: '',
		// 		description: '',
		// 		price: '',
		// 	}}
		// 	// onSubmit={(e) => console.log(e)}>
		// 	onSubmit={submit}>
		// 	{({ handleSubmit, handleChange, values }) => (
		// 		<div className='container mb-5'>
		// 			<form onSubmit={handleSubmit}>
		// 				<div className='mb-3'>
		// 					<label htmlFor='title' className='form-label'>
		// 						Title
		// 					</label>
		// 					<input
		// 						value={values.title}
		// 						onChange={handleChange}
		// 						type='text'
		// 						className='form-control'
		// 						id='title'
		// 						name='title'
		// 					/>
		// 				</div>
		// 				<div className='mb-3'>
		// 					<label htmlFor='description' className='form-label'>
		// 						Description
		// 					</label>
		// 					<input
		// 						value={values.description}
		// 						onChange={handleChange}
		// 						type='text'
		// 						className='form-control'
		// 						id='description'
		// 						name='description'
		// 					/>
		// 				</div>
		// 				<div className='mb-3'>
		// 					<label htmlFor='price' className='form-label'>
		// 						Price
		// 					</label>
		// 					<input
		// 						value={values.price}
		// 						onChange={handleChange}
		// 						type='text'
		// 						className='form-control'
		// 						id='price'
		// 						name='price'
		// 					/>
		// 				</div>
		// 				<button type='submit' className='btn btn-primary'>
		// 					Create
		// 				</button>
		// 			</form>
		// 		</div>
		// 	)}
		// </Formik>
	)
}

export default CreateProductFormFormik
