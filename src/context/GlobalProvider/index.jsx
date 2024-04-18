import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const GlobalProvider = ({ children }) => {
	const [isShowModal, setIsShowModal] = useState(false)

	const toggleModal = () => {
		setIsShowModal((prev) => !prev)
	}
	return (
		<GlobalContext.Provider value={{ toggleModal, isShowModal }}>{children}</GlobalContext.Provider>
	)
}

export default GlobalProvider
