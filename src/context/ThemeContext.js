import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
	const themeReducer = (state, action) => {
		switch (action.type) {
			case 'CHANGE_COLOR':
				return { ...state, bgColor: action.payload }
			default:
				return state
		}
	}
	const [initialState, dispatch] = useReducer(themeReducer, {
		bgColor: '#ec4899'
	})
	const changeColor = color => {
		dispatch({ type: 'CHANGE_COLOR', payload: color })
	}

	return <ThemeContext.Provider value={{ ...initialState, changeColor }}>{children}</ThemeContext.Provider>
}
