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
};

const breakpointValues = {
	xs: 0,
	sm: 600,
	md: 960,
	lg: 1280,
	xl: 1920
};

const ThemeContext = React.createContext({
	// TODO: dynamic switching light/dark theme
	colors: {...themes.dark},
	breakpoints: {
		up: key => `@media (min-width: ${breakpointValues[key]}px)`,
		down: key => `@media (max-width: ${breakpointValues[key]}px)`
	}
});

// colour scheme from: https://coolors.co/256eff-46237a-3ddc97-fcfcfc-ff495c

export default function useTheme() {
	return React.useContext(ThemeContext);
}
