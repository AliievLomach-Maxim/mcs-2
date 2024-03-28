import { Button, Div, Link } from './StyledWrapper.styled'

const StyledWrapper = ({ children }) => {
	return (
		<Div isOnline={false}>
			<Link href='/'>LINK</Link>
			<Button isOnline={false}>Click</Button>
			{children}
		</Div>
	)
}

export default StyledWrapper
