import styled from 'styled-components'

export const Div = styled('div')`
	color: ${({ isOnline }) => (isOnline ? 'white' : 'black')};
	background-color: red;
	text-align: center;
`

export const Link = styled('a')`
	text-decoration: none;
	color: black;
	&:hover {
		color: green;
	}
`

// export const Anchor = styled('a')(({hre})=>({
// 	textDecoration: 'none',
// 	color: 'red',
// }))

export const Button = styled('button')(({ isOnline }) => {
	return {
		textDecoration: 'none',
		color: isOnline ? 'green' : 'black',
		'&:hover': {
			color: 'green',
		},
	}
})
