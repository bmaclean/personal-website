import React from 'react';

const themes = {
	light: {
		background: 'linear-gradient(#FBFFF1, #CED1C6)',
		primary: '#3D52D5',
		secondary: '#B4C5E4',
		tertiary: '#090C9B',
		contrastText: '#0B1722'
	},
	dark: {
		background: 'linear-gradient(#0B1722, #1E3E5C)',
		primary: '#3D52D5',
		secondary: '#B4C5E4',
		tertiary: '#090C9B',
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

// colour scheme from: https://coolors.co/0b1722-090c9b-3d52d5-b4c5e4-e5e8dc

export default function useTheme() {
	return React.useContext(ThemeContext);
}
