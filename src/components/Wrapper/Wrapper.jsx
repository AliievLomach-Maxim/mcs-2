import './style.css'
import someVar from './style.module.css'
// import clsx from 'clsx'
import { generateClasses } from './utils'

const Wrapper = ({ children, isOnline }) => {
	return (
		// <div className={someVar.container}>
		// <div
		// 	className={clsx(someVar.container, {
		// 		[someVar.online]: isOnline,
		// 		[someVar.offline]: !isOnline,
		// 	})}
		// >
		<div className={generateClasses(isOnline, someVar)}>
			<h1 className='header'>Home page</h1>
			<p>Description</p>
			<hr />
			{children}
			<div className={generateClasses(isOnline, someVar)}>qwerty</div>
		</div>
		// Vanilla css
		// <div
		// 	className={clsx('container', {
		// 		online: isOnline,
		// 		offline: !isOnline,
		// 	})}
		// >
		// 	<h1 className='header'>Home page</h1>
		// 	<p>Description</p>
		// 	<hr />
		// 	{children}
		// </div>
	)
}

export default Wrapper
