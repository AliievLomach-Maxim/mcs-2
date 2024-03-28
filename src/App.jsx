import React from 'react'
import GenerateCardList from './components/GenerateCardList/GenerateCardList'
import GenerateCardList2 from './components/GenerateCardList2/GenerateCardList2'
import data from './data.json'
import Wrapper from './components/Wrapper/Wrapper'
import './style.css'
import StyledWrapper from './components/StyledWrapper/StyledWrapper'

const App = () => {
	return (
		<div>
			{/* <GenerateCardList id='123' data={data} name='Alex' /> */}
			{/* {GenerateCardList({ data, name: 'Alex' })} */}
			{/* <Wrapper isOnline={true}>
				<div style={{ backgroundColor: 'red' }} className='container'>
					<h4>Card title</h4>
					<p>qwretyqwrety</p>
				</div>
			</Wrapper>
			<Wrapper isOnline={false}>
				<div className='container'>
					<h4>Card title 2</h4>
					<p>qwretyqwrety 2222</p>
				</div>
			</Wrapper> */}
			<StyledWrapper>StyledWrapper</StyledWrapper>
			{/* <GenerateCardList2 data={data}>asd asd asd asd</GenerateCardList2> */}
		</div>
	)
}

export default App

// const div = React.createElement('div', { id: 'qwe', children: ['asd', 'asd'] })
