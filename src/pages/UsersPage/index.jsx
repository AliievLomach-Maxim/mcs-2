import { Navigate } from 'react-router-dom'

// redirect
// <Navigate to='' />

// program nav
// useNavigate() > navigate('/)

// <Link/>
// <NavLink/>

// useLocation()

// useSearchParams()  > [seP,setSP] > RENDER
// v6

// ionic

const UserPage = () => {
	const isAuth = false

	return isAuth ? <div>UserPage</div> : <Navigate to='/' />
}

export default UserPage
