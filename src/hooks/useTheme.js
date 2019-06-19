import React from 'react';

const themes = {
	light: {
		background: '#FCFCFC',
		primary: '#FF495C',
		secondary: '#256EFF',
		tertiary: '#3DDC97',
		contrastText: '#0B1722'
	},
	dark: {
		background: '#0B1722',
		primary: '#FF495C',
		secondary: '#256EFF',
		tertiary: '#3DDC97',
		contrastText: '#FCFCFC'
	}
}

const ThemeContext = React.createContext({
	// TODO: dynamic switching light/dark theme
	...themes.dark
});

// colour scheme from: https://coolors.co/256eff-46237a-3ddc97-fcfcfc-ff495c

export default function useTheme() {
	return React.useContext(ThemeContext);
}
