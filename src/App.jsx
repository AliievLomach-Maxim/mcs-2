import GenerateCardList from './components/GenerateCardList/GenerateCardList'
import GenerateCardList2 from './components/GenerateCardList2/GenerateCardList2'
import data from './data.json'

const App = () => {
	return (
		<div>
			{/* <GenerateCardList id='123' data={data} name='Alex' /> */}
			{/* {GenerateCardList({ data, name: 'Alex' })} */}
			<GenerateCardList2 data={data} />
		</div>
	)
}

export default App
