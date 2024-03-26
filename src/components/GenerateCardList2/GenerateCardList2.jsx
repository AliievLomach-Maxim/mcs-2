const GenerateCardList2 = ({ data }) => {
	const isShowBtn = (elem) => elem.price > 1000

	return data.map((elem) => (
		<div className='card' key={elem.id}>
			<img src={elem.thumbnail} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>{elem.title}</h5>
				<p className='card-text'>{elem.description}</p>
				<button className='btn btn-primary'>{elem.price}</button>

				{/* {elem.price > 1000 ? <button>Buy</button> : <button>Sale</button>} */}
				{false}
				{null}
				{undefined}
				{isShowBtn(elem) && <button>Buy</button>}
			</div>
		</div>
	))
}
export default GenerateCardList2
