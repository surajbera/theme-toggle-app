import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
	const themeReducer = (state, action) => {
		switch (action.type) {
			case 'CHANGE_COLOR':
				localStorage.setItem('themeColor', JSON.stringify(action.payload))
				return { ...state, bgColor: action.payload }
			default:
				return state
		}
	}
	const [initialState, dispatch] = useReducer(themeReducer, {
		bgColor: JSON.parse(localStorage.getItem('themeColor')) ? JSON.parse(localStorage.getItem('themeColor')) : '#475569'
	})
	const updateThemeColor = color => {
		dispatch({ type: 'CHANGE_COLOR', payload: color })
	}

	return <ThemeContext.Provider value={{ ...initialState, updateThemeColor }}>{children}</ThemeContext.Provider>
}
