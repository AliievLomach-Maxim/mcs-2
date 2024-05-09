import { useSelector } from 'react-redux'
import { selectRootLoading } from '../../store/root/selectors'

const Loader = () => {
	const isLoading = useSelector(selectRootLoading)
	return isLoading && <div>Loader</div>
}

export default Loader
